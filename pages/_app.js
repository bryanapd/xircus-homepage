import '../styles/globals.css'
import { NextIntlProvider } from 'next-intl'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps, router }) {
  // const messages = require(`../i18n/${router.locale}.json`)
  return (
    // <NextIntlProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    // </NextIntlProvider>
  ) 
}

export default MyApp
