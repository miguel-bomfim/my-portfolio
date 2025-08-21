import './globals.css'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
        <head>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9534755771299362"
                crossorigin="anonymous"
            ></Script>
        </head>
        <body>{children}</body>
    </html>
  )
}
