import Head from 'next/head'

import '../assets/scss/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
    
        <title>Maranhã Legal</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
