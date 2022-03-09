import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFontSize, updateTheme } from '../../features/counterSlice'
import lightLogo from '../../public/img/logo.png'
import darkLogo from '../../public/img/logo-black.png'
import invertedLogo from '../../public/img/logo-yellow.png'

const Nav = () => {
  const dispatch = useDispatch()
  const fontSize = useSelector((state) => state.counter.fontSize)
  const theme = useSelector((state) => state.counter.theme)

  return (
    <div className="relative  flex h-[10vh]  min-h-[96px] items-center justify-between light:bg-[#F8F9FA] darken:border-b-[1px] darken:border-solid darken:bg-black darken:text-white inverted:border-b-[1px] inverted:border-yellow-400  inverted:bg-black">
      <div className="relative mt-4 ml-4 mr-8 h-full  w-56">
        <a
          href="https://www.muzeumpamieci.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {theme === 'theme-light' ? (
            <Image
              src={lightLogo}
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
            />
          ) : (
            <></>
          )}
          {theme === 'theme-darken' ? (
            <Image
              src={darkLogo}
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
            />
          ) : (
            <></>
          )}
          {theme === 'theme-inverted' ? (
            <Image
              src={invertedLogo}
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
            />
          ) : (
            <></>
          )}
        </a>
      </div>
      {/*       <div className="mr-4 sm:hidden" id="outer-container">
        <MenuIcon className="cursor-pointer text-4xl inverted:bg-yellow-400" />
        <BurgerMenu />
      </div> */}
      <div className=" flex items-center ">
        <div className="mr-2 space-x-1 sm:mr-4 sm:space-x-2">
          <span
            className={`cursor-pointer text-[16px] sm:text-xl ${
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
            className={`cursor-pointer text-[20px] hover:text-red-600 sm:text-2xl ${
              fontSize === 'medium' ? 'text-red-600  underline' : ''
            } darken:text-white darken:hover:underline inverted:text-yellow-400 inverted:hover:underline`}
            onClick={(e) => dispatch(updateFontSize(e.target.dataset.size))}
            data-size="medium"
          >
            A
          </span>
          <span
            className={`cursor-pointer text-[24px] hover:text-red-600 sm:text-3xl ${
              fontSize === 'large' ? 'text-red-600  underline' : ''
            } darken:text-white inverted:text-yellow-400 inverted:hover:underline`}
            onClick={(e) => dispatch(updateFontSize(e.target.dataset.size))}
            data-size="large"
          >
            A
          </span>
        </div>
        <div className=" mr-2 space-x-2 sm:mr-4">
          <span
            className={`cursor-pointer px-2 text-[24px] hover:underline light:border light:border-solid light:border-red-600 darken:bg-white darken:text-black inverted:bg-white inverted:text-black sm:text-3xl`}
            data-theme="light"
            onClick={(e) =>
              dispatch(updateTheme(`theme-${e.target.dataset.theme}`))
            }
          >
            A
          </span>
          <span
            className="cursor-pointer bg-black px-2 text-[24px] text-white hover:underline darken:border darken:border-white inverted:text-yellow-400 sm:text-3xl"
            data-theme="darken"
            onClick={(e) =>
              dispatch(updateTheme(`theme-${e.target.dataset.theme}`))
            }
          >
            A
          </span>
          <span
            className="cursor-pointer bg-black px-2 text-[24px] text-[#FFFF00] hover:underline inverted:border inverted:border-yellow-400  sm:text-3xl"
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
