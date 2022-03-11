import React, { useEffect, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PublicIcon from '@mui/icons-material/Public'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useRouter } from 'next/router'
import { i18n } from 'dateformat'
import dateFormat, { masks } from 'dateformat'

i18n.dayNames = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sobota',
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Niedziela',
]

i18n.monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
  'Stycznia',
  'Lutego',
  'Marca',
  'Kwietnia',
  'Maja',
  'Czerwca',
  'Lipca',
  'Sierpnia',
  'Września',
  'Października',
  'Listopada',
  'Grudnia',
]

const FormHeader = ({ date, hour }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [formatedDate, setFormatedDate] = useState('')

  useEffect(() => {
    if (loading) {
      const day = date.date?.slice(0, 2)
      const month = date.date?.slice(3, 5)
      const year = date.date?.slice(6, 10)

      if (day && month && year) {
        setFormatedDate(`${month}/${day}/${year}`)
        setLoading(false)
      }
    }
  }, [date])

  return (
    <div>
      <div className="relative mb-4 flex h-[10%] w-full items-center justify-center  text-center ">
        <ArrowBackIosIcon
          style={{ transform: 'translateY(-50%)' }}
          className="absolute left-[10%] top-[50%] cursor-pointer"
          onClick={() => router.push(`/${date.date}`)}
        />
        <h1 className="text-2xl">Rezerwacja</h1>
      </div>
      <div className="flex flex-col items-start pb-4 lg:items-center">
        <div className="flex flex-col lg:flex-row">
          <div className=" mr-8 mb-1 flex text-[#767676] darken:text-white inverted:text-yellow-400">
            <AccessTimeIcon className="mr-2" />
            <div>30 min</div>
          </div>
          <div className="mb-1 flex">
            <LocationOnIcon className="mr-2" />
            <div>Maksymiliana Kolbego 2A, 32-600 Oświęcim</div>
          </div>
        </div>{' '}
        <div className="flex flex-col lg:flex-row ">
          <div className="mr-8 mb-1 flex">
            <CalendarTodayIcon className="mr-2" />
            <div>
              {`${hour.hour?.replace(/-/g, ':')} - ${hour.hour.slice(
                0,
                2
              )}:30, `}
              {!loading
                ? `${dateFormat(formatedDate, 'dddd')}
          ${dateFormat(formatedDate, 'd')} 
           ${dateFormat(formatedDate, 'mmmm')} ${dateFormat(
                    formatedDate,
                    'yyyy'
                  )}r.`
                : ''}
            </div>
          </div>
          <div>
            <div className="mb-1 flex">
              <PublicIcon className="mr-2" />
              <div>Muzeum Pamięci Mieszkańców Ziemi Oświęcimskiej</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormHeader
