import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useDispatch, useSelector } from 'react-redux'
import { updateData } from '../../../features/counterSlice'

const BookingSystem = ({ data }) => {
  const [currentData, setCurrentData] = useState(data)
  const [count, setCount] = useState(0)
  const router = useRouter()
  const date = router.query.date
  const hours = router.query.hours.replace('-', ':')
  const dispatch = useDispatch()
  const value = useSelector((state) => state.counter.value)

  useEffect(() => {
    // dispatch(updateData(data))
  }, [])

  console.log({ value })

  const handleSubmit = () => {}

  return (
    <div className="mx-auto max-w-screen-lg p-4">
      <div className="relative mb-5">
        <ArrowBackIosIcon
          className="absolute cursor-pointer"
          onClick={() => router.push(`/reservation/${router.query.date}`)}
        />
        <h1 className="text-center">
          Dzień:
          <span className="mr-4 font-bold"> {date?.replace(/-/g, '.')}</span>
          Godzina: <span className="mr-4 font-bold">{hours}</span>
        </h1>
      </div>
      <div className="mb-5">
        <h1 className="text-center">
          Dostępne bilety:
          <span className="mr-4 font-bold">30</span>
        </h1>
      </div>
      <div className="mx-auto flex w-[200px] flex-col">
        <label>
          Imię:
          <input type="text" className="mb-4 border border-black" />
        </label>
        <label>
          Nazwisko:
          <input type="text" className="mb-4 border border-black" />
        </label>
        <select className="mb-2">
          <option>dorosły</option>
          <option>ulgowy</option>
          <option>niepełnosprawny</option>
        </select>
        <label>
          Ilość biletów:
          <input
            type="number"
            className="mb-2 border border-black"
            min={0}
            value={count}
            onChange={(e) => setCount(+e.target.value)}
          />
        </label>
        <button
          className="rounded border border-black px-4"
          onClick={handleSubmit}
        >
          Potwierdź
        </button>
      </div>
    </div>
  )
}

export default BookingSystem

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/data')
  const data = await res.json()
  dispatch(updateData(data))
  return {
    props: { data }, // will be passed to the page component as props
  }
}
