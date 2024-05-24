export function withMiddleware2(middleware) {
  return async (request, event) => {
    const pathname = request.nextUrl.pathname
    console.log('with middleware 2 =>', pathname)
    return middleware(request, event)
  }
}
