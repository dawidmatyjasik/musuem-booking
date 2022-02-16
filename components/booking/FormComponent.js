import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import InputTile from './FormComponents/InputTile'
import FormHeader from './FormComponents/FormHeader'

const FormComponent = () => {
  const router = useRouter()
  const { register } = useForm()
  const [data, setData] = useState({})
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

  const handleClick = async () => {
    if (
      data[date]?.hours[hour]?.current + number <=
      data[date]?.hours[hour]?.limit
    ) {
      const response = await fetch(`/api/data/${date}/${hour}`, {
        method: 'PUT',
        body: JSON.stringify({ number }),
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
            <div className="flex flex-col items-center">
              <InputTile name="Imię" type="text" />
              <InputTile name="Nazwisko *" type="text" />
              <InputTile name="Email *" type="text" />
              <InputTile name="Numer telefonu *" type="text" />
              <InputTile
                name="Ilość biletów *"
                type="number"
                value={number}
                onChange={(e) => setNumber(+e.target.value)}
              />

              <button
                className="h-10 rounded border border-solid border-stone-600 px-8 py-1 inverted:border-yellow-400"
                onClick={handleClick}
              >
                Potwierdź
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FormComponent
