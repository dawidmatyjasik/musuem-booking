import React from 'react'

const Footer = () => {
  return (
    <div className="flex h-1/5 min-h-[180px] items-center justify-evenly bg-[#343A40] p-4">
      <div className="flex flex-col space-y-2 text-white">
        <h3 className="text-xs">
          Muzeum Pamięci Mieszkańców Ziemi Oświęcimskiej
        </h3>
        <h3 className="text-xs">ul. Maksymiliana Kolbego 2A,</h3>
        <h3 className="text-xs">32-600 Oświęcim</h3>
        <h3 className="text-xs">tel: 33 447 40 84</h3>
      </div>
      <h3 className="text-xs text-white">
        Copyright © 2022 | Created by Magme Agency{' '}
      </h3>
    </div>
  )
}

export default Footer
