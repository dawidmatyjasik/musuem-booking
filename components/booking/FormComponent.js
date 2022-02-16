import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import InputTile from './FormComponents/InputTile'
import FormHeader from './FormComponents/FormHeader'

const FormComponent = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const [data, setData] = useState({})
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [number, setNumber] = useState(0)
  const hour = router?.query?.form
  const date = router.query.date

  const fetchData = async () => {
    const response = await fetch('/api/data')
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleClick = async (user) => {
    if (
      data[date]?.hours[hour]?.current + +user.number <=
      data[date]?.hours[hour]?.limit
    ) {
      const response = await fetch(`/api/data/${date}/${hour}`, {
        method: 'PUT',
        body: JSON.stringify({ number: +user.number, user: user }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      console.log(data)

      fetchData()
      setNumber(0)
      alert('Zarezerwowano miejsce')
      router.push('/')
    } else {
      alert('Nie ma wystarczająco miejsca')
      setNumber(0)
    }
  }

  return (
    <div className="mx-auto flex flex-col items-center py-4 px-2 font-bold darken:text-white inverted:text-yellow-400">
      {data[date]?.hours[hour] ? (
        <>
          <FormHeader />
          <div className="w-full border-t-[1px] border-solid border-[rgba(0,0,0,.1)] pt-4 text-center">
            <h2 className="pb-2 text-lg">Wprowadź dane</h2>
            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit((data) => {
                handleClick(data)
                // console.log(data)
              })}
            >
              <InputTile
                name="Imię"
                type="text"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                register={{ ...register('name', { required: true }) }}
              />
              <InputTile
                name="Nazwisko *"
                type="text"
                // value={surname}
                // onChange={(e) => setSurname(e.target.value)}
                register={{ ...register('surname', { required: true }) }}
              />
              <InputTile
                name="Email *"
                type="email"
                // value={mail}
                // onChange={(e) => setMail(e.target.value)}
                register={{
                  ...register('mail', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  }),
                }}
              />
              <InputTile
                name="Numer telefonu *"
                type="tel"
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
                register={{
                  ...register('phone', {
                    required: true,
                    minLength: 9,
                    maxLength: 9,
                  }),
                }}
              />
              <InputTile
                name="Ilość biletów *"
                type="number"
                // value={number}
                // onChange={(e) => setNumber(+e.target.value)}
                register={{ ...register('number', { required: true, max: 5 }) }}
              />

              <input
                className="h-10 cursor-pointer rounded border border-solid border-stone-600 px-8 py-1 inverted:border-yellow-400"
                // onClick={handleClick}
                type="submit"
              />
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FormComponent
