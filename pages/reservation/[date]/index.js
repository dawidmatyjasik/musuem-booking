import React, { useState } from 'react'
import { useRouter } from 'next/router'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Button } from '@mui/material'

const Menu = ({ data }) => {
  const [hour, setHour] = useState('')
  const router = useRouter()
  const db = data[router.query.date]

  const handleSubmit = () => {
    if (hour) {
      router.push(`${router.asPath}/${hour}`)
    }
  }

  return (
    <div className="mx-auto max-w-screen-lg p-4">
      <div>
        <div className="relative mb-4 flex items-center">
          <ArrowBackIosIcon
            className="absolute cursor-pointer"
            onClick={() => router.back()}
          />
          <h1 className="w-full text-center">Wybierz godzinę</h1>
        </div>
        <div>
          {Object.keys(db.hours).map((el) => (
            <div
              key={el}
              className={`mx-auto mb-4 w-1/2 cursor-pointer border-2 border-black ${
                hour === el ? 'bg-stone-400' : ''
              }`}
              onClick={(e) => setHour(e.target.textContent)}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="mx-auto flex justify-center rounded border-2 border-solid border-black px-4"
      >
        Dalej
      </button>
    </div>
  )
}

export default Menu

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/data')
  const data = await res.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}
