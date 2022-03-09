import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import InputTile from './InputTile'
import FormHeader from './FormHeader'
import { Button } from '@mui/material'

const FormComponent = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  /*   const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [number, setNumber] = useState(0) */
  const hour = router?.query?.form
  const date = router.query.date

  const fetchData = async () => {
    const abortCont = new AbortController()
    setLoading(true)
    const response = await fetch('/api/data', { signal: abortCont.signal })
    const data = await response.json()
    setData(data)
    setLoading(false)
    return () => abortCont.abort()
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
      alert('Zarezerwowano miejsce')
      router.push('/')
    } else {
      alert('Nie ma wystarczająco miejsca')
    }
  }

  return (
    <div className="mx-auto flex h-full flex-col items-center py-4 px-2 font-bold darken:text-white inverted:text-yellow-400">
      {loading ? (
        <div className="grid h-full w-full place-items-center">
          <h1>Ładowanie...</h1>
        </div>
      ) : (
        <>
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
                    register={{ ...register('name', { required: true }) }}
                  />
                  <InputTile
                    name="Nazwisko *"
                    type="text"
                    register={{ ...register('surname', { required: true }) }}
                  />
                  <InputTile
                    name="Email *"
                    type="email"
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
                    register={{
                      ...register('number', { required: true, max: 5 }),
                    }}
                  />

                  <Button
                    className="rounded border border-solid border-stone-600 px-8 py-1 light:text-black darken:text-white inverted:border-yellow-400 inverted:text-yellow-400"
                    type="submit"
                  >
                    Prześlij
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  )
}

export default FormComponent
