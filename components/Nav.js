import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <div className="flex  h-[10vh] items-center justify-between bg-[#F8F9FA]">
      <Image
        src={'/img/logo.png'}
        height={100}
        width={200}
        objectFit="contain"
      />
      <div className="flex items-center">
        <div className="mr-4 space-x-2">
          <span className="cursor-pointer text-xl text-[#00adee] underline">
            A
          </span>
          <span className="cursor-pointer text-2xl">A</span>
          <span className="cursor-pointer text-3xl">A</span>
        </div>
        <div className="mr-4 space-x-2">
          <span className="cursor-pointer border border-solid border-[#00adee] px-2 text-3xl">
            A
          </span>
          <span className="cursor-pointer bg-black px-2 text-3xl text-white">
            A
          </span>
          <span className="cursor-pointer bg-black px-2 text-3xl text-[#FFFF00]">
            A
          </span>{' '}
        </div>
      </div>
    </div>
  )
}

export default Nav
