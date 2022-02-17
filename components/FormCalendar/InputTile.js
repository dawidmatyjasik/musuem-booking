import React from 'react'

const InputTile = ({ name, onChange, value, type, register }) => {
  return (
    <label className="mb-4 flex w-1/2 flex-col items-start">
      <span className="mb-1 text-sm">{name}</span>
      <input
        type={type}
        // value={value}
        // onChange={onChange}
        {...register}
        className="w-full rounded-md border-[1px] border-[rgb(0,0,0,.2)] py-2  darken:text-black inverted:border inverted:border-yellow-400 inverted:bg-black inverted:text-yellow-400"
      />
    </label>
  )
}

export default InputTile
