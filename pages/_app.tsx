import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const data = 'Test asdsad'

  return <Component {...pageProps} />
}

export default MyApp
