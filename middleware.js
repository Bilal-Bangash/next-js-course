import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl

  console.log('%cpathname', 'color:red;font-size:50px', pathname)

  console.log(
    '%csearchParams.get)',
    'color:red;font-size:50px',
    searchParams.get('sort')
  )
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
  return NextResponse.json({ message: 'Hello from middleware' })
}

export const config = {
  matcher: '/api/test'
}
