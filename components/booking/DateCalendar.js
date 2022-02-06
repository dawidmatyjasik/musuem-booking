import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'

const DateCalendar = () => {
  const [date, setDate] = useState(new Date())
  const [formatedDate, setFormatedDate] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    if (formatedDate) {
      router.push(`${router.asPath}${formatedDate}`)
    }
  }

  const handleDateChange = (nextValue) => {
    setDate(nextValue)
    const year = nextValue.getFullYear()
    const month = nextValue.getMonth() + 1
    const day = nextValue.getDate()
    const format = `${day < 10 ? `0${day}` : day}-${
      month < 10 ? `0${month}` : month
    }-${year}`

    setFormatedDate(format)
  }

  return (
    <div className="flex h-[100%] min-h-[70vh]  w-full flex-col items-center justify-evenly py-4">
      <h1 className="text-2xl">Wybierz datę i godzinę</h1>
      <div className="my-4 flex items-center justify-center">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <button
        onClick={handleSubmit}
        className="rounded border border-solid border-stone-600 px-8 py-1"
      >
        Dalej
      </button>
    </div>
  )
}

export default DateCalendar
