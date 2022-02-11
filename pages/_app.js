import '../styles/calendar.css'
import '../styles/globals.css'
import '../styles/burger.css'
import { Provider } from 'react-redux'
import { store } from '../store/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
