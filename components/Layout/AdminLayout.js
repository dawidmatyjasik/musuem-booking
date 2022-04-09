import React from 'react'
import AdminNav from '../Nav/AdminNav'
import Content from './Content'
import Footer from '../Footer/Footer'
import addHtmlClass from '../../utils/addHtmlHook'

const AdminLayout = ({ children, session }) => {
  addHtmlClass('theme-light')
  return (
    <>
      <AdminNav session={session} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}

export default AdminLayout
