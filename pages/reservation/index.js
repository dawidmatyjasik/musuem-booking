import Head from 'next/head'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'

export default function Reservation() {
  const [date, setDate] = useState(new Date())
  const [formatedDate, setFormatedDate] = useState('')

  const router = useRouter()

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

  const handleSubmit = (e) => {
    if (formatedDate) {
      router.push(`${router.asPath}/${formatedDate}`)
    }
  }

  return (
    <div className="mx-auto max-w-screen-lg text-center">
      <h1 className="p-5 text-xl font-bold">Wybierz datę i godzinę</h1>
      <div className="mb-4 flex justify-center">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <Button
        variant="contained"
        onClick={handleSubmit}
        className="bg-[#1087FF]"
      >
        Dalej
      </Button>
    </div>
  )
}
