import React from 'react'
import Nav from './Nav'
import Content from './Content'
import Footer from './Footer'
import addHtmlClass from '../utils/addHtmlHook'
import { useSelector } from 'react-redux'
import db from '../data/db'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const fontSize = useSelector((state) => state.counter.fontSize)
  const theme = useSelector((state) => state.counter.theme)
  const data = useSelector((state) => state.counter.db)
  addHtmlClass(fontSize)
  addHtmlClass(theme)

  // addHtmlClass(theme)

  return (
    <>
      <Nav />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}

export default Layout
