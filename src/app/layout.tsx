import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono as Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  preload: true,
})

export const metadata: Metadata = {
  title: "Hello, it's me!",
  description: 'Portoflio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${roboto.variable} font-sans`}>{children}</body>
    </html>
  )
}
