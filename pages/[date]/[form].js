import React from 'react'
import FormComponent from '../../components/FormCalendar/FormComponent'
import Layout from '../../components/Layout/Layout'

const Hours = ({ date, hour }) => {
  return (
    <div className="flex h-screen flex-col">
      <Layout>
        <FormComponent date={date} hour={hour} data={date} />
      </Layout>
    </div>
  )
}

export default Hours

export async function getStaticPaths() {
  const dev = process.env.NODE_ENV !== 'production'
  const server = dev
    ? 'http://localhost:3000'
    : 'https://musuem-booking.vercel.app'

  const res = await fetch(`${server}/api/mongo`)
  const data = await res.json()

  const json = JSON.parse(JSON.stringify(data))

  let paths = []

  json.map((el) => {
    el.hours.map((item) => {
      paths.push({
        params: {
          date: el.date,
          form: item.hour,
        },
      })
    })
  })
  console.log(paths)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const dev = process.env.NODE_ENV !== 'production'
  const server = dev
    ? 'http://localhost:3000'
    : 'https://musuem-booking.vercel.app'

  const { params } = context
  const res2 = await fetch(`${server}/api/mongo/${params.date}/${params.form}`)
  const res = await fetch(`${server}/api/mongo/${params.date}`)

  const date = await res.json()
  const hour = await res2.json()

  const json1 = JSON.parse(JSON.stringify(date))
  const json2 = JSON.parse(JSON.stringify(hour))

  return {
    props: { date: json1, hour: json2 },
  }
}

/* export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/data')
  const data = await response.json()
  return { props: { data } }
}
 */
