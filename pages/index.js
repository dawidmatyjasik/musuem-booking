import Link from 'next/link'
import { useState } from 'react'
// import 'react-calendar/dist/Calendar.css'
import { useDispatch, useSelector } from 'react-redux'
import CalendarComponent from '../components/booking/DateCalendar'
import Layout from '../components/Layout'
import { updateFontSize } from '../features/counterSlice'

export default function Home() {
  /*   const [fontSize, setFontSize] = useState('small')
  const count = useSelector((state) => state.counter.fontSize)
  const dispatch = useDispatch()

  const handleFontSize = (e) => {
    dispatch(updateFontSize(e.target.dataset.size))
    // setFontSize(e.target.dataset.size)
    // console.log(fontSize)
  }

  console.log(count) */

  /*   const handleClass = () => {
    if (fontSize === 'medium') return 'theme-medium'
    else if (fontSize === 'large') return 'theme-large'
    else return 'theme-small'
  } */
  return (
    <div className={`flex min-h-screen flex-col`}>
      <Layout>
        <CalendarComponent />
      </Layout>
    </div>
  )
}
