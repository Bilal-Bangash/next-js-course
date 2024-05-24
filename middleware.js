import { NextResponse } from 'next/server'
import { i18n } from '@/i18n.config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request) {
  const negotiateHeaders = {}
  request.headers.forEach((value, key) => (negotiateHeaders[key] = value))

  const locales = i18n.locales
  const languages = new Negotiator({ headers: negotiateHeaders }).languages()

  const locale = matchLocale(languages, locales, i18n.defaultLocale)
  return locale
}

export function middleware(request) {
  const { pathname } = request.nextUrl
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }

  // console.log('%cpathname', 'color:red;font-size:50px', pathname)

  // console.log(
  //   '%csearchParams.get)',
  //   'color:red;font-size:50px',
  //   searchParams.get('sort')
  // )
  // return NextResponse.next()

  //   return NextResponse.redirect(new URL('/team', request.url))
  //   const allCookies = request.cookies.getAll()
  //   console.log('%callCookies', 'color:red;font-size:50px', allCookies)
  //   const response = NextResponse.next()
  //   response.cookies.set({
  //     name: 'next',
  //     value: 'fast',
  //     path: '/'
  //   })
  //   return response
  // return NextResponse.json({ message: 'Hello from middleware' })
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}

// export const config = {
//   matcher: '/api/test'
// }
