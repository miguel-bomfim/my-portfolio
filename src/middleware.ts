import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['br', 'en'],
  defaultLocale: 'br',
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
