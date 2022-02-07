import React from 'react'

const HourTile = ({ left, hour, full, onClick, selected }) => {
  return (
    <div
      className={`flex h-16 min-h-[64px] w-4/5 cursor-pointer items-center rounded-lg  border-l-4 border-l-red-600 ${
        full ? 'bg-[#d1d2d3]' : 'bg-[#F8F9FA]'
      } ${full ? '' : 'hover:bg-[#E9ECEF]'}  drop-shadow-md ${
        selected === hour ? 'bg-[#e3e6e9]' : ''
      } darken:border-l-white darken:text-black`}
      onClick={onClick}
    >
      <div className="flex h-full w-full items-center p-1">
        <span className="flex h-full flex-grow items-center text-xl">
          {hour}
        </span>
        <span className="text-xl">{left}/20</span>
      </div>
    </div>
  )
}

export default HourTile
