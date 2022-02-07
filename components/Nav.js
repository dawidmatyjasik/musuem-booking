import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { updateFontSize, updateTheme } from '../features/counterSlice'

const Nav = () => {
  const dispatch = useDispatch()
  const fontSize = useSelector((state) => state.counter.fontSize)
  const theme = useSelector((state) => state.counter.theme)
  console.log(theme)

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
          <span
            className={`cursor-pointer text-xl ${
              fontSize === 'small' || fontSize === undefined
                ? 'text-[#00adee]  underline'
                : ''
            } hover:text-[#00adee]`}
            onClick={(e) => dispatch(updateFontSize(e.target.dataset.size))}
            data-size="small"
          >
            A
          </span>
          <span
            className={`cursor-pointer text-2xl hover:text-[#00adee] ${
              fontSize === 'medium' ? 'text-[#00adee]  underline' : ''
            }`}
            onClick={(e) => dispatch(updateFontSize(e.target.dataset.size))}
            data-size="medium"
          >
            A
          </span>
          <span
            className={`cursor-pointer text-3xl hover:text-[#00adee] ${
              fontSize === 'large' ? 'text-[#00adee]  underline' : ''
            }`}
            onClick={(e) => dispatch(updateFontSize(e.target.dataset.size))}
            data-size="large"
          >
            A
          </span>
        </div>
        <div className="mr-4 space-x-2">
          <span
            className="cursor-pointer border border-solid border-[#00adee] px-2 text-3xl"
            data-theme="light"
            onClick={(e) => dispatch(updateTheme(e.target.dataset.theme))}
          >
            A
          </span>
          <span
            className="cursor-pointer bg-black px-2 text-3xl text-white"
            data-theme="dark"
            onClick={(e) => dispatch(updateTheme(e.target.dataset.theme))}
          >
            A
          </span>
          <span
            className="cursor-pointer bg-black px-2 text-3xl text-[#FFFF00]"
            data-theme="inverted"
            onClick={(e) => dispatch(updateTheme(e.target.dataset.theme))}
          >
            A
          </span>{' '}
        </div>
      </div>
    </div>
  )
}

export default Nav
