import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useRouter } from 'next/router'

const HourCalendar = () => {
  const router = useRouter()
  return (
    <div className="text-evenly flex h-full w-full flex-col items-center justify-evenly py-4">
      <div className="relative h-[10%] w-full text-center">
        <ArrowBackIosIcon
          className="absolute left-[10%] cursor-pointer"
          onClick={() => router.back()}
        />
        <h1 className="text-2xl">Wybierz godzinę</h1>
      </div>
      <div className="flex max-h-[80%] w-full flex-col items-center  space-y-2 overflow-x-hidden overflow-y-scroll">
        <div className="flex h-16 w-4/5 items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md">
          <div className="flex w-full">
            <span className="flex-grow text-xl">10:00</span>
            <span className="text-xl">0/20</span>
          </div>
        </div>

        <div className="flex h-16 w-4/5 items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md">
          <div className="flex w-full">
            <span className="flex-grow text-xl">10:00</span>
            <span className="text-xl">0/20</span>
          </div>
        </div>
        <div className="flex h-16 w-4/5 items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md">
          <div className="flex w-full">
            <span className="flex-grow text-xl">10:00</span>
            <span className="text-xl">0/20</span>
          </div>
        </div>
        <div className="flex h-16 w-4/5 items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md">
          <div className="flex w-full">
            <span className="flex-grow text-xl">10:00</span>
            <span className="text-xl">0/20</span>
          </div>
        </div>
        <div className="flex h-16 w-4/5 items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md">
          <div className="flex w-full">
            <span className="flex-grow text-xl">10:00</span>
            <span className="text-xl">0/20</span>
          </div>
        </div>
      </div>
      <button className="h-[10%] rounded border border-solid border-stone-600 px-8 py-1">
        Dalej
      </button>
    </div>
  )
}

export default HourCalendar
