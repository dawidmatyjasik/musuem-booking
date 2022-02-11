import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { useDispatch, useSelector } from 'react-redux'
import { updateFontSize, updateTheme } from '../features/counterSlice'

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector('.bm-menu-wrap')
  isOpen
    ? menuWrap.setAttribute('aria-hidden', false)
    : menuWrap.setAttribute('aria-hidden', true)
}

const BurgerMenu = () => {
  const fontSize = useSelector((state) => state.counter.fontSize)
  const dispatch = useDispatch()
  return (
    <Menu
      noOverlay
      onStateChange={toggleMenu}
      right
      outerContainerId={'outer-container'}
    >
      <div className="space-x-2">
        <span
          className={`cursor-pointer text-xl ${
            fontSize === 'small' || fontSize === undefined
              ? 'text-red-600  underline'
              : ''
          } hover:text-red-600 darken:text-white darken:hover:underline  inverted:text-yellow-400 inverted:hover:underline`}
          onClick={(e) => dispatch(updateFontSize(e.target.dataset.size))}
          data-size="small"
        >
          Małe litery
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
      <div className="space-x-2">
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
    </Menu>
  )
}

export default BurgerMenu
