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
      <div className="flex max-h-[80%] w-full flex-col items-center  space-y-2 overflow-x-hidden overflow-y-scroll scrollbar-hide">
        <div className="flex h-16 min-h-[64px] w-4/5 cursor-pointer items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md hover:bg-[#E9ECEF]">
          <div className="flex w-full">
            <span className="flex-grow text-xl">10:00</span>
            <span className="text-xl">0/20</span>
          </div>
        </div>

        <div className="flex h-16 min-h-[64px] w-4/5 cursor-pointer items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md hover:bg-[#E9ECEF]">
          <div className="flex w-full">
            <span className="flex-grow text-xl">11:00</span>
            <span className="text-xl">0/20</span>
          </div>
        </div>
        <div className="flex h-16 min-h-[64px] w-4/5 cursor-pointer items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md hover:bg-[#E9ECEF]">
          <div className="flex w-full">
            <span className="flex-grow text-xl">12:00</span>
            <span className="text-xl">0/20</span>
          </div>
        </div>
        <div className="flex h-16 min-h-[64px] w-4/5 cursor-pointer items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md hover:bg-[#E9ECEF]">
          <div className="flex w-full">
            <span className="flex-grow text-xl">13:00</span>
            <span className="text-xl">0/20</span>
          </div>
        </div>
        <div className="flex h-16 min-h-[64px] w-4/5 cursor-pointer items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md hover:bg-[#E9ECEF]">
          <div className="flex w-full">
            <span className="flex-grow text-xl">14:00</span>
            <span className="text-xl">4/20</span>
          </div>
        </div>
        <div className="drop-shadow-mdhover:bg-[#E9ECEF] flex h-16 min-h-[64px] w-4/5 cursor-pointer items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1">
          <div className="flex w-full">
            <span className="flex-grow text-xl">15:00</span>
            <span className="text-xl">12/20</span>
          </div>
        </div>
        <div className="flex h-16 min-h-[64px] w-4/5 cursor-pointer items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md hover:bg-[#E9ECEF]">
          <div className="flex w-full">
            <span className="flex-grow text-xl">16:00</span>
            <span className="text-xl">11/20</span>
          </div>
        </div>
        <div className="flex h-16 min-h-[64px] w-4/5 cursor-pointer items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md hover:bg-[#E9ECEF]">
          <div className="flex w-full">
            <span className="flex-grow text-xl">17:00</span>
            <span className="text-xl">16/20</span>
          </div>
        </div>
        <div className="flex h-16 min-h-[64px] w-4/5 cursor-pointer items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#F8F9FA] p-1 drop-shadow-md hover:bg-[#E9ECEF]">
          <div className="flex w-full">
            <span className="flex-grow text-xl">18:00</span>
            <span className="text-xl">20/20</span>
          </div>
        </div>
        <div className="flex h-16 min-h-[64px] w-4/5 cursor-pointer items-center rounded-lg border-2 border-l-4 border-l-red-600 bg-[#d1d2d3] p-1 drop-shadow-md  ">
          <div className="flex w-full">
            <span className="flex-grow text-xl">19:00</span>
            <span className="text-xl">20/20</span>
          </div>
        </div>
      </div>
      <button className="h-10 rounded border border-solid border-stone-600 px-8 py-1">
        Dalej
      </button>
    </div>
  )
}

export default HourCalendar
