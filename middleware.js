import { NextResponse } from 'next/server'
import { i18n } from '@/i18n.config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { chain } from '@/middlewares/chain'
import { withMiddleware1 } from '@/middlewares/middleware1'
import { withMiddleware2 } from '@/middlewares/middleware2'
// export { default } from 'next-auth/middleware'

function getLocale(request) {
  const negotiateHeaders = {}
  request.headers.forEach((value, key) => (negotiateHeaders[key] = value))

  const locales = i18n.locales
  const languages = new Negotiator({ headers: negotiateHeaders }).languages()

  const locale = matchLocale(languages, locales, i18n.defaultLocale)
  return locale
}

// export function middleware(request) {
//   const { pathname } = request.nextUrl
//   const pathnameIsMissingLocale = i18n.locales.every(
//     locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   )

//   // redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request)

//     return NextResponse.redirect(
//       new URL(
//         `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
//         request.url
//       )
//     )
//   }

//   // console.log('%cpathname', 'color:red;font-size:50px', pathname)

//   // console.log(
//   //   '%csearchParams.get)',
//   //   'color:red;font-size:50px',
//   //   searchParams.get('sort')
//   // )
//   // return NextResponse.next()

//   //   return NextResponse.redirect(new URL('/team', request.url))
//   //   const allCookies = request.cookies.getAll()
//   //   console.log('%callCookies', 'color:red;font-size:50px', allCookies)
//   //   const response = NextResponse.next()
//   //   response.cookies.set({
//   //     name: 'next',
//   //     value: 'fast',
//   //     path: '/'
//   //   })
//   //   return response
//   // return NextResponse.json({ message: 'Hello from middleware' })
// }

// async function middleware1(request) {
//   const url = request.url
//   console.log('middleware 1 =>', url)

//   return NextResponse.next()
// }

// async function middleware2(request) {
//   const pathname = request.nextUrl.pathname
//   console.log('middleware 2 =>', pathname)
//   return NextResponse.next()
// }

// function withMiddleware1(middleware) {
//   return async (request, event) => {
//     const url = request.url
//     console.log('middleware 1 =>', url)
//     return middleware(request, event)
//   }
// }

// function withMiddleware2(middleware) {
//   return async (request, event) => {
//     const pathname = request.nextUrl.pathname
//     console.log('with middleware 2 =>', pathname)
//     return middleware(request, event)
//   }
// }

// export default withMiddleware1(withMiddleware2(middleware1))
// export async function middleware(request) {
//   await middleware1(request)
//   await middleware2(request)
// }
// const middlewares = [withMiddleware1, withMiddleware2]
// export default chain(middlewares)
// export const config = {
//   matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
// }

// export const config = {
//   matcher: '/api/test'
// }

// export const config = {
//   matcher: ['/protected/:path*']
// }

import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware({
  publicRoutes: ['/']
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
