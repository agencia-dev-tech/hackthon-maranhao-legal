import { Html, Head, Main, NextScript, DocumentHead } from 'next/document'

export default function Document({ locale }) {

  return (
    <Html lang={locale}>
      <Head>

        <meta httpEquiv="Content-Language" content="pt-br" />

        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" as="font" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" as="font" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700&display=swap" rel="stylesheet" as="font" crossOrigin="" />

      
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fff" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#24387F"></meta>

        {/* <title>Entenda de forma simples e intuitiva a sentença do seu processo judiciário</title> */}
        <meta name="title" content="Entenda de forma simples e intuitiva a sentença do seu processo judiciário" />
        <meta name="description" content="Maranhão Legal é o principal site para que os cidadãos maranhenses entendam e encontrem as sentenças dos seus processos judiciários. " />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maranhao-legal.herokuapp.com/" />
        <meta property="og:title" content="Entenda de forma simples e intuitiva a sentença do seu processo judiciário" />
        <meta property="og:description" content="Maranhão Legal é o principal site para que os cidadãos maranhenses entendam e encontrem as sentenças dos seus processos judiciários. " />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://maranhao-legal.herokuapp.com/" />
        <meta property="twitter:title" content="Entenda de forma simples e intuitiva a sentença do seu processo judiciário" />
        <meta property="twitter:description" content="Maranhão Legal é o principal site para que os cidadãos maranhenses entendam e encontrem as sentenças dos seus processos judiciários. " />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
            
      </Head>
      <body>
       
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
