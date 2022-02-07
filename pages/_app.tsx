import '../styles/globals.css'
import '../styles/calendar.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {store} from '../store/store'
import { useEffect } from 'react'
import useHtmlClass from '../utils/addHtmlHook'



function MyApp({ Component, pageProps }: AppProps) {
  useHtmlClass('bigger')
  return (
    <Provider store={store}>    <Component {...pageProps}/></Provider>

  )
}

export default MyApp
