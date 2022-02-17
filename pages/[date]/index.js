import React from 'react'
import HourCalendar from '../../components/HourCalendar/HourCalendar'
import Layout from '../../components/Layout/Layout'

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
