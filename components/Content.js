import React from 'react'

const Content = ({ children }) => {
  return (
    <div className="flex-grow light:bg-[#E9ECEF] darken:bg-black">
      <div className="mx-auto h-full max-w-screen-lg">{children}</div>
    </div>
  )
}

export default Content
