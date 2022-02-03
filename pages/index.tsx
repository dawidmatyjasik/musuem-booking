import Head from 'next/head'
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/router';

export default function Home({data}) {
  const [date, setDate] = useState(new Date());
  const [formatedDate, setFormatedDate] = useState('')

  const router = useRouter()

  const handleDateChange = (nextValue) => {
    setDate(nextValue)
    const year = nextValue.getFullYear()
    const month = nextValue.getMonth() + 1
    const day = nextValue.getDate()
    const format = `${day < 10 ? `0${day}` : day}-${month < 10 ? `0${month}` : month}-${year}`
    setFormatedDate(format)
  }


  return (
    <div className="">
      <h1 className='font-bold p-5 text-xl'>Wybierz datę i godzinę</h1>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />

    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
