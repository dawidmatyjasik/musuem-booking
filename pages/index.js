import CalendarComponent from '../components/DateCalendar/DateCalendar'
import Layout from '../components/Layout/Layout'

export default function Home() {
  console.log(process.env.NODE_ENV)

  return (
    <div className={`flex min-h-screen flex-col`}>
      <Layout>
        <CalendarComponent />
      </Layout>
    </div>
  )
}
