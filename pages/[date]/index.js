import React from 'react'
import HourCalendar from '../../components/booking/HourCalendar'
import Layout from '../../components/Layout'

const Hours = () => {
  return (
    <div className="flex h-screen flex-col">
      <Layout>
        <HourCalendar />
      </Layout>
    </div>
  )
}

export default Hours
