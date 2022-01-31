import '../styles/globals.css'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <ThemeProvider>
      <CSSReset />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
