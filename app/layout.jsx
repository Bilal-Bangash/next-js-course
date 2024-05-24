import { Inter, Roboto, Playfair_Display } from 'next/font/google'
import LocalFont from 'next/font/local'
import Header from '@/components/layout/header'
// import Footer from '@/components/layout/footer'
import Providers from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

// multiple size on styles

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap'
})

// local font
// const localFont = LocalFont({
//   src: './fonts/SourceSansPro-Regular.woff2',
//   display: 'swap'
// })

export const metadata = {
  title: 'Muhammad Bilal Bangash',
  description: 'NextJS practice course'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${roboto.className} ${playfairDisplay.variable}`}>
        <Providers>
          <Header />
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}
