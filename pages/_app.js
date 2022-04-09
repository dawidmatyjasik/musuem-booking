import '../styles/calendar.css'
import '../styles/globals.css'
import '../styles/burger.css'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
