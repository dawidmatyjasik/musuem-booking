import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { updateFontSize, updateTheme } from '../features/counterSlice'
import BurgerMenu from './BurgerMenu'

const Nav = () => {
  const dispatch = useDispatch()
  const fontSize = useSelector((state) => state.counter.fontSize)
  const theme = useSelector((state) => state.counter.theme)

  return (
    <div className="relative  flex h-[10vh] min-h-[93px] items-center justify-between light:bg-[#F8F9FA] darken:border-b-[1px] darken:border-solid darken:bg-black darken:text-white inverted:border-b-[1px] inverted:border-yellow-400 inverted:bg-black">
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
      <div className="mr-4 sm:hidden" id="outer-container">
        <MenuIcon className="cursor-pointer text-4xl inverted:bg-yellow-400" />
        {/* <BurgerMenu /> */}
      </div>
      <div className="hidden items-center sm:flex ">
        <div className="mr-4 space-x-2">
          <span
            className={`cursor-pointer text-xl ${
              fontSize === 'small' || fontSize === undefined
                ? 'text-red-600  underline'
                : ''
            } hover:text-red-600 darken:text-white darken:hover:underline  inverted:text-yellow-400 inverted:hover:underline`}
            onClick={(e) => dispatch(updateFontSize(e.target.dataset.size))}
            data-size="small"
          >
            A
          </span>
          <span
            className={`cursor-pointer text-2xl hover:text-red-600 ${
              fontSize === 'medium' ? 'text-red-600  underline' : ''
            } darken:text-white darken:hover:underline inverted:text-yellow-400 inverted:hover:underline`}
            onClick={(e) => dispatch(updateFontSize(e.target.dataset.size))}
            data-size="medium"
          >
            A
          </span>
          <span
            className={`cursor-pointer text-3xl hover:text-red-600 ${
              fontSize === 'large' ? 'text-red-600  underline' : ''
            } darken:text-white inverted:text-yellow-400 inverted:hover:underline`}
            onClick={(e) => dispatch(updateFontSize(e.target.dataset.size))}
            data-size="large"
          >
            A
          </span>
        </div>
        <div className="mr-4 space-x-2">
          <span
            className={`cursor-pointer px-2 text-3xl hover:underline light:border light:border-solid light:border-red-600 darken:bg-white darken:text-black inverted:bg-white inverted:text-black`}
            data-theme="light"
            onClick={(e) =>
              dispatch(updateTheme(`theme-${e.target.dataset.theme}`))
            }
          >
            A
          </span>
          <span
            className="cursor-pointer bg-black px-2 text-3xl text-white hover:underline darken:border darken:border-white inverted:text-yellow-400"
            data-theme="darken"
            onClick={(e) =>
              dispatch(updateTheme(`theme-${e.target.dataset.theme}`))
            }
          >
            A
          </span>
          <span
            className="cursor-pointer bg-black px-2 text-3xl text-[#FFFF00] hover:underline inverted:border inverted:border-yellow-400 inverted:border-yellow-400"
            data-theme="inverted"
            onClick={(e) =>
              dispatch(updateTheme(`theme-${e.target.dataset.theme}`))
            }
          >
            A
          </span>{' '}
        </div>
      </div>
    </div>
  )
}

export default Nav
