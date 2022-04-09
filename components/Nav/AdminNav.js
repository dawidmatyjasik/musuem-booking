import { Button } from '@mui/material'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import lightLogo from '../../public/img/logo.png'

const AdminNav = ({ session }) => {
  return (
    <div className="relative  flex h-[10vh]  min-h-[96px] items-center justify-between light:bg-[#F8F9FA] darken:border-b-[1px] darken:border-solid darken:bg-black darken:text-white inverted:border-b-[1px] inverted:border-yellow-400  inverted:bg-black">
      <div className="relative mt-4 ml-4 mr-8 h-full  w-56">
        <a
          href="https://www.muzeumpamieci.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={lightLogo}
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
          />
        </a>
      </div>
      <div className=" flex items-center ">
        <div className="mr-2 space-x-1 sm:mr-4 sm:space-x-2">
          {session ? (
            <Button color="error" variant="outlined" onClick={() => signOut()}>
              Wyloguj
            </Button>
          ) : (
            <Button color="error" variant="outlined" onClick={() => signIn()}>
              Zaloguj
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminNav
