import Head from 'next/head'
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [formatedDate, setFormatedDate] = useState('')


  useEffect(() => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const format = `${day < 10 ? `0${day}` : day}-${month < 10 ? `0${month}` : month}-${year}`
    setFormatedDate(format)
  }, [date]);
  

  return (
    <div className="">
      <h1 className='font-bold p-5 text-xl'>Wybierz datę i godzinę</h1>
      <Calendar
        onChange={setDate}
        value={date}
      />

    </div>
  )
}
