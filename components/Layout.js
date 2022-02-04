import React from 'react'
import Nav from './Nav'
import Content from './Content'
import Footer from './Footer'
import Test from './Test'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}

export default Layout
