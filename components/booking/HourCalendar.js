import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useRouter } from 'next/router'
import HourTile from './HourTile'

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
        <HourTile hour="11:00" left="0" />
        <HourTile hour="12:00" left="1" />
        <HourTile hour="13:00" left="4" />
        <HourTile hour="14:00" left="7" />
        <HourTile hour="15:00" left="11" />
        <HourTile hour="16:00" left="16" />
        <HourTile hour="17:00" left="17" />
        <HourTile hour="18:00" left="14" />
        <HourTile hour="19:00" left="19" />
        <HourTile hour="20:00" left="20" full={true} />
      </div>
      <button className="h-10 rounded border border-solid border-stone-600 px-8 py-1">
        Dalej
      </button>
    </div>
  )
}

export default HourCalendar
