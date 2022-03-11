import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import InputTile from './InputTile'
import FormHeader from './FormHeader'
import { Button } from '@mui/material'

const FormComponent = ({ date, hour }) => {
  const router = useRouter()

  console.log(date)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleClick = async (user) => {
    if (hour.current + +user.number <= hour.limit) {
      const response = await fetch(`/api/data/${date.date}/${hour.hour}`, {
        method: 'PUT',
        body: JSON.stringify({ number: +user.number, user: user }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      console.log(data)
      alert('Zarezerwowano miejsce')
      router.push('/')
    } else {
      alert('Nie ma wystarczająco miejsca')
    }
  }

  return (
    <div className="mx-auto flex h-full flex-col items-center py-4 px-2 font-bold darken:text-white inverted:text-yellow-400">
      <>
        <FormHeader date={date} hour={hour} />
        <div className="w-full border-t-[1px] border-solid border-[rgba(0,0,0,.1)] pt-4 text-center">
          <h2 className="pb-2 text-lg">Wprowadź dane</h2>
          <form
            className="flex flex-col items-center"
            onSubmit={handleSubmit((data) => {
              handleClick(data)
              // console.log(data)
            })}
          >
            <InputTile
              name="Imię"
              type="text"
              register={{
                ...register('name', { required: 'Podaj imię' }),
              }}
              error={errors?.name?.message}
            />
            <InputTile
              name="Nazwisko *"
              type="text"
              register={{
                ...register('surname', { required: 'Podaj nazwisko' }),
              }}
              error={errors?.surname?.message}
            />
            <InputTile
              name="Email *"
              type="email"
              register={{
                ...register('mail', {
                  required: 'Podaj mail',
                  pattern: /^\S+@\S+$/i,
                }),
              }}
              error={errors?.mail?.message}
            />
            <InputTile
              name="Numer telefonu *"
              type="tel"
              register={{
                ...register('phone', {
                  required: 'Podaj numer telefonu',
                  minLength: 9,
                  maxLength: 9,
                }),
              }}
              error={errors?.phone?.message}
            />
            <InputTile
              name="Ilość biletów *"
              type="number"
              register={{
                ...register('number', { required: 'Wybierz liczbę biletów' }),
              }}
              error={errors?.number?.message}
            />

            <Button
              className="rounded border border-solid border-stone-600 px-8 py-1 light:text-black darken:text-white inverted:border-yellow-400 inverted:text-yellow-400"
              type="submit"
            >
              Prześlij
            </Button>
          </form>
        </div>
      </>
    </div>
  )
}

export default FormComponent
