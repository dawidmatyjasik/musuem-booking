import React, { useState } from 'react'

const Dark = () => {
  const [mode, setMode] = useState('light')

  const handleTheme = (e) => {
    setMode(e.target.textContent)
  }

  return (
    <div
      className={`${mode === 'dark' ? 'theme-dark' : ''} ${
        mode === 'neon' ? 'theme-neon' : ''
      }`}
    >
      <div className="neon:bg-red-600 dark:bg-yellow-600">
        <div className="flex justify-center">
          <button className="mr-4" onClick={handleTheme}>
            light
          </button>
          <button onClick={handleTheme} className="mr-4">
            dark
          </button>
          <button onClick={handleTheme} className="mr-4">
            neon
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dark
