import React from 'react'

const Content = ({ children }) => {
  return (
    <div className="h-[70%] bg-[#E9ECEF]">
      <div className="mx-auto h-full max-w-screen-lg">{children}</div>
    </div>
  )
}

export default Content
