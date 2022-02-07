import React from 'react'

const Footer = () => {
  return (
    <div className="flex h-1/5 min-h-[180px] flex-col items-center justify-evenly p-4 light:bg-[#343A40] darken:border-t-[1px] darken:border-solid darken:bg-black darken:text-white sm:flex-row">
      <div className="flex flex-col space-y-2 text-white">
        <h3 className="text-xs">
          Muzeum Pamięci Mieszkańców Ziemi Oświęcimskiej
        </h3>
        <h3 className="text-xs">ul. Maksymiliana Kolbego 2A,</h3>
        <h3 className="text-xs">32-600 Oświęcim</h3>
        <h3 className="text-xs">tel: 33 447 40 84</h3>
        <h3 className="block text-xs sm:hidden">
          {' '}
          Copyright © 2022 | Created by Magme Agency
        </h3>
      </div>
      <h3 className="hidden text-xs text-white sm:block">
        Copyright © 2022 | Created by Magme Agency{' '}
      </h3>
    </div>
  )
}

export default Footer
