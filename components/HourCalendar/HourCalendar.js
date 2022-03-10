import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useRouter } from 'next/router'
import HourTile from './HourTile'
import { Button } from '@mui/material'

const HourCalendar = ({ data }) => {
  console.log(data)

  const router = useRouter()
  const [selected, setSelected] = useState(null)
  const [hidden, setHidden] = useState(false)

  const handleClick = (e) => {
    setSelected(e.target.textContent)
  }

  const handleSubmit = () => {
    if (selected) {
      router.push(`/${router.query.date}/${selected.replace(':', '-')}`)
    }
  }

  useEffect(() => {
    const arr = []
    data.hours.forEach((el) => {
      if (el.limit === el.current) {
        arr.push(true)
      } else {
        arr.push(false)
      }
    })

    setHidden(arr.every((el) => el === true))
  }, [data])

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
        {!hidden ? (
          data.hours.map((el) => (
            <HourTile
              key={el.hour}
              hour={el.hour}
              limit={el.limit}
              current={el.current}
              onClick={handleClick}
              selected={selected}
            />
          ))
        ) : (
          <h1>Brak dostępnych godzin</h1>
        )}
        {/*         {data[router.query.date] && !hidden ? (
          Object.keys(data[router.query.date].hours).map((el, i) => {
            return (
              <HourTile
                key={el}
                hour={el}
                limit={data[router.query.date]?.hours[el].limit}
                current={data[router.query.date]?.hours[el].current}
                onClick={handleClick}
                selected={selected}
              />
            )
          })
        ) : (
          <h1>Brak dostępnych godzin</h1>
        )} */}
      </div>
      <Button
        className="rounded border border-solid border-stone-600 px-8 py-1 light:text-black darken:text-white inverted:border-yellow-400 inverted:text-yellow-400"
        onClick={handleSubmit}
      >
        Dalej
      </Button>
    </div>
  )
}

export default HourCalendar
