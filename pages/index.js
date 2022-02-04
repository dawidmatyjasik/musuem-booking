import Link from 'next/link'
import { useState } from 'react'
// import 'react-calendar/dist/Calendar.css'
import { useDispatch, useSelector } from 'react-redux'
import CalendarComponent from '../components/booking/DateCalendar'
import Layout from '../components/Layout'
import { decrement, increment } from '../features/counterSlice'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Layout>
        <CalendarComponent />
      </Layout>
    </div>
  )
}

{
  /* <Link href={'/reservation'}>Do strony rezerwacji</Link> */
}
