import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Button } from '@mui/material'

const DateCalendar = () => {
  const [date, setDate] = useState(new Date())
  const [formatedDate, setFormatedDate] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    if (formatedDate) {
      router.push(`${router.asPath}${formatedDate}`)
    }
  }

  useEffect(() => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const format = `${day < 10 ? `0${day}` : day}-${
      month < 10 ? `0${month}` : month
    }-${year}`

    setFormatedDate(format)
  }, [])

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
      <h1 className="text-2xl light:text-black darken:text-white inverted:text-yellow-400">
        Wybierz datę i godzinę
      </h1>
      <div className="my-4 flex items-center justify-center">
        <Calendar
          onChange={handleDateChange}
          value={date.getDay() === 0 || date.getDay() === 6 ? null : date}
          className={`calendar-dark light:bg-white light:text-black darken:bg-black darken:text-white inverted:border-yellow-400 inverted:bg-black inverted:text-yellow-400`}
          locale="pl"
          minDate={new Date()}
          maxDate={new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)}
          tileDisabled={({ date }) =>
            date.getDay() === 0 || date.getDay() === 6
          }
          prevLabel={<ArrowBackIosIcon />}
          nextLabel={<ArrowForwardIosIcon />}
          // showDoubleView={false}
          // showNavigation={false}
        />
      </div>
      <Button
        onClick={handleSubmit}
        className="rounded border border-solid border-stone-600 px-8 py-1 light:text-black darken:text-white inverted:border-yellow-400 inverted:text-yellow-400"
      >
        Dalej
      </Button>
    </div>
  )
}

export default DateCalendar
