import CalendarComponent from '../components/DateCalendar/DateCalendar'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col`}>
      <Layout>
        <CalendarComponent />
      </Layout>
    </div>
  )
}
