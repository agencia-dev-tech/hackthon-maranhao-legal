import Head from 'next/head'
import VLibras from '@djpfs/react-vlibras'


import { AppProvider } from "../hooks/AppContext";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../assets/scss/main.scss';

import '../assets/styles/fonts.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Maranhão Legal</title>
      </Head>
      <VLibras />
      <AppProvider>
        <ToastContainer  role="alert"  />
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp
