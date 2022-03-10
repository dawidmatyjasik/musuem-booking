import React from 'react'
import HourCalendar from '../../components/HourCalendar/HourCalendar'
import Layout from '../../components/Layout/Layout'
const Hours = ({ data }) => {
  console.log(data)

  return (
    <div className="flex h-screen flex-col">
      <Layout>
        <HourCalendar data={data} />
      </Layout>
    </div>
  )
}

export default Hours

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { date: '10-03-2022' },
      },
      {
        params: { date: '11-03-2022' },
      },
    ],
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { params } = context
  const res = await fetch(`http://localhost:3000/api/mongo/10-03-2022`)

  const data = await res.json()

  return {
    props: { data },
  }
}

/* export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/data')
  const data = await response.json()
  return { props: { data } }
} */

// export const getStaticProps = async () => {
//   const { db } = await connectToDatabase()
//   const data = await db.collection('dates').find({}).toArray()
//   const properties = JSON.parse(JSON.stringify(data))
//   return {
//     props: { properties },
//   }
// }
