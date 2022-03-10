import React from 'react'
import HourCalendar from '../../components/HourCalendar/HourCalendar'
import Layout from '../../components/Layout/Layout'
import { connectToDatabase } from '../../utils/mongodb'

const Hours = ({ data }) => {
  return (
    <div className="flex h-screen flex-col">
      <Layout>
        <HourCalendar data={data} />
      </Layout>
    </div>
  )
}

export default Hours

/* export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/data')
  const data = await response.json()
  return { props: { data } }
} */

export async function getStaticPaths() {
  const { db } = await connectToDatabase()
  const data = await db.collection('dates').find({}).toArray()
  const properties = JSON.parse(JSON.stringify(data))

  const paths = properties.map((el) => {
    return {
      params: {
        date: `${el.hour}`,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { params } = context

  const { db } = await connectToDatabase()
  const data = await db.collection('dates').find({}).toArray()
  const properties = JSON.parse(JSON.stringify(data))
  return {
    props: { properties },
  }
}

// export const getStaticProps = async () => {
//   const { db } = await connectToDatabase()
//   const data = await db.collection('dates').find({}).toArray()
//   const properties = JSON.parse(JSON.stringify(data))
//   return {
//     props: { properties },
//   }
// }
