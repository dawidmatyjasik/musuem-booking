import React, { useState } from 'react'

const Dark = () => {
  const [mode, setMode] = useState('light')

  const handleTheme = (e) => {
    setMode(e.target.textContent)
  }

  console.log(mode)

  return (
    <div
      className={`${mode === 'dark' ? 'theme-darken' : ''} ${
        mode === 'inverted' ? 'theme-inverted' : ''
      } ${mode === 'light' ? 'theme-light' : ''}`}
    >
      <div className="darken:bg-gray-600 light:bg-white inverted:bg-black">
        <div className="flex justify-center">
          <button className="mr-4" onClick={handleTheme}>
            <span className="light:text-black inverted:text-white">light</span>
          </button>
          <button onClick={handleTheme} className="mr-4">
            dark
          </button>
          <button onClick={handleTheme} className="mr-4">
            inverted
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dark
