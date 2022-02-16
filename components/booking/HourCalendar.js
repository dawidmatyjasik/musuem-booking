import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useRouter } from 'next/router'
import HourTile from './HourTile'
import db from '../../data/db'

const HourCalendar = () => {
  const [data, setData] = useState({})
  const router = useRouter()
  const [selected, setSelected] = useState(null)
  const handleClick = (e) => {
    setSelected(e.target.textContent)
  }
  const handleSubmit = () => {
    if (selected) {
      router.push(`/${router.query.date}/${selected.replace(':', '-')}`)
    }
  }

  const fetchData = async () => {
    const response = await fetch('/api/data')
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="text-evenly flex h-full w-full flex-col items-center justify-evenly py-4 darken:text-white inverted:text-yellow-400">
      <div className="relative flex h-[10%] w-full items-center justify-center text-center">
        <ArrowBackIosIcon
          className="absolute left-[10%] top-[50%] cursor-pointer"
          style={{ transform: 'translateY(-50%)' }}
          onClick={() => router.push('/')}
        />
        <h1 className="text-2xl">Wybierz godzinę</h1>
      </div>
      <div className="my-4 flex max-h-[50vh] w-full flex-col  items-center space-y-2 overflow-x-hidden overflow-y-scroll scrollbar-hide">
        {data[router.query.date] ? (
          Object.keys(data[router.query.date].hours).map((el, i) => (
            <HourTile
              key={el}
              hour={el}
              limit={data[router.query.date]?.hours[el].limit}
              current={data[router.query.date]?.hours[el].current}
              onClick={handleClick}
              selected={selected}
            />
          ))
        ) : (
          <h1>Brak dostępnych godzin</h1>
        )}
      </div>
      <button
        className="h-10 rounded border border-solid border-stone-600 px-8 py-1 inverted:border-yellow-400"
        onClick={handleSubmit}
      >
        Dalej
      </button>
    </div>
  )
}

export default HourCalendar
