import './globals.css'
import Script from 'next/script'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta name="google-adsense-account" content="ca-pub-9534755771299362" />
      </head>
      <body>
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9534755771299362"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  )
}
