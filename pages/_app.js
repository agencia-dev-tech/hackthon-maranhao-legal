import Head from 'next/head'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../assets/scss/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
    
        <title>Maranhã Legal</title>
      </Head>
      <ToastContainer  role="alert"  />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
