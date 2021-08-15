import Layout from '../components/Layout'
import '../styles/globals.css'
import { wrapper } from '../store/store'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
