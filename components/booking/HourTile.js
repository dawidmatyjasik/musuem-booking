import React from 'react'

const HourTile = ({ left, hour, full }) => {
  return (
    <div
      className={`flex h-16 min-h-[64px] w-4/5 cursor-pointer items-center rounded-lg border-2 border-l-4 border-l-red-600 ${
        full ? 'bg-[#d1d2d3]' : 'bg-[#F8F9FA]'
      } ${full ? '' : 'hover:bg-[#E9ECEF]'} p-1 drop-shadow-md`}
    >
      <div className="flex w-full">
        <span className="flex-grow text-xl">{hour}</span>
        <span className="text-xl">{left}/20</span>
      </div>
    </div>
  )
}

export default HourTile
