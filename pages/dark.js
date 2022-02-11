import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import BurgerMenu from '../components/BurgerMenu'

const Dark = () => {
  const [mode, setMode] = useState('light')

  const handleTheme = (e) => {
    setMode(e.target.textContent)
  }

  console.log(mode)

  return <BurgerMenu />
}

export default Dark
