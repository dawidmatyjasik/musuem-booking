import Link from 'next/link'
import { useState } from 'react'
// import 'react-calendar/dist/Calendar.css'
import { useDispatch, useSelector } from 'react-redux'
import CalendarComponent from '../components/booking/DateCalendar'
import Layout from '../components/Layout'
import { decrement, increment } from '../features/counterSlice'

export default function Home() {
  const [fontSize, setFontSize] = useState('small')

  const handleFontSize = (e) => {
    setFontSize(e.target.dataset.size)
  }
  const handleClass = () => {
    if (fontSize === 'medium') return 'theme-medium'
    else if (fontSize === 'large') return 'theme-large'
    else return 'theme-small'
  }
  return (
    <div className={`flex min-h-screen flex-col`}>
      <Layout handleFontSize={handleFontSize} fontSize={fontSize}>
        <CalendarComponent />
      </Layout>
    </div>
  )
}

{
  /* <Link href={'/reservation'}>Do strony rezerwacji</Link> */
}
