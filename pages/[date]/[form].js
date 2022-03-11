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
  const res = await fetch(`http://localhost:3000/api/mongo`)
  const data = await res.json()
  let paths = []

  data.map((el) => {
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
  const { params } = context
  const res2 = await fetch(
    `http://localhost:3000/api/mongo/${params.date}/${params.form}`
  )
  const res = await fetch(`http://localhost:3000/api/mongo/${params.date}`)

  const date = await res.json()
  const hour = await res2.json()

  return {
    props: { date, hour },
  }
}

/* export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/data')
  const data = await response.json()
  return { props: { data } }
}
 */
