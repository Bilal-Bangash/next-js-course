import { Inter } from 'next/font/google'
import { i18n } from '@/i18n.config'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Muhammad Bilal Bangash',
  description: 'NextJS practice course language'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

const RootLayout = ({ children, params }) => {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
