import Head from 'next/head'
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';

export default function Home({data}) {
  const [date, setDate] = useState(new Date());
  const [formatedDate, setFormatedDate] = useState('')
  const [hour, setHour] = useState('')

  const router = useRouter()

  const handleDateChange = (nextValue) => {
    setDate(nextValue)
    const year = nextValue.getFullYear()
    const month = nextValue.getMonth() + 1
    const day = nextValue.getDate()
    const format = `${day < 10 ? `0${day}` : day}-${month < 10 ? `0${month}` : month}-${year}`
    setFormatedDate(format)
  }

  const handleSubmit = () => {
    router.push(`${formatedDate}`);
  }

  

  


  return (
    <div className="mx-auto max-w-screen-lg text-center">
      <h1 className='font-bold p-5 text-xl'>Wybierz datę i godzinę</h1>
      <div className='flex justify-center mb-4'>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
{/*       {formatedDate ?(
              <div className='flex-grow'>
              {Object.keys(data[formatedDate].hours).map(el => (
                <div className='flex space-x-4 mb-4'>
                <div key={el} className='border border-black border-2 w-[20%] cursor-pointer' onClick={(e) =>  setHour(e.target.innerText)}>{el}</div>
                {el === hour ? <button>potwierdz</button> : <></>}
            </div>
          ))}
            </div>
      ) : <></>} */}
      </div>
      <Button variant='contained' onClick={handleSubmit} className='bg-[#1087FF]'>Dalej</Button>



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
