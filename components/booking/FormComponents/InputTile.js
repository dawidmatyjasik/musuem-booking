import React from 'react'

const InputTile = ({ value, type }) => {
  return (
    <label className="mb-4 flex w-1/2 flex-col items-start">
      <span className="mb-1 text-sm">{value}</span>
      <input
        type={type}
        className="w-full rounded-md border-[1px] border-[rgb(0,0,0,.2)] py-2 darken:text-black inverted:border inverted:border-yellow-400 inverted:bg-black inverted:text-yellow-400"
      />
    </label>
  )
}

export default InputTile
