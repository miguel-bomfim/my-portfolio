import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  defaultLocale: 'br',
  locales: ['br', 'en'],
})

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames without `.`
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Match all pathnames within `/users`, optionally with a locale prefix
    '/(.+)?/users/(.+)',
  ],
}
