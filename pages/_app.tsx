import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Index from "@/src/components/Header";

export default function App({Component, pageProps}: AppProps) {
  return (
    <div>
      <Index/>
      <Component {...pageProps} />
    </div>
  )
}
