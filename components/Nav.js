import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'
import MenuIcon from '@mui/icons-material/Menu'

const Nav = () => {
  const router = useRouter()
  return (
    <div className="flex  h-[10vh] min-h-[93px] items-center justify-between bg-[#F8F9FA]">
      <div className="relative mt-4 ml-4 mr-8 h-full  w-56">
        <a
          href="https://www.muzeumpamieci.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={'/img/logo.png'}
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
          />
        </a>
      </div>
      <div className="mr-4 sm:hidden">
        <MenuIcon className="cursor-pointer text-4xl" />
      </div>
      <div className="hidden items-center sm:flex ">
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
