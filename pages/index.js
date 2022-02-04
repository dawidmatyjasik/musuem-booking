import Link from 'next/link'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../components/Nav'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Test from '../components/Test'
import Layout from '../components/Layout'
import { decrement, increment } from '../features/counterSlice'

export default function Home({ data }) {
  const [currentData, setCurrentData] = useState(data)
  console.log(currentData)

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex h-screen flex-col">
      <Layout>
        <Test />
      </Layout>
    </div>
  )
}

{
  /* <Link href={'/reservation'}>Do strony rezerwacji</Link> */
}
