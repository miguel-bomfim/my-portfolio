import React from 'react'
import Link from 'next/link'

export default function IntlButtons({ pathname }: { pathname: string }) {
  return (
    <div className="fixed right-6 p-6 text-4xl transition delay-75 hover:scale-110">
      {pathname === ('/' || '/br') ? (
        <Link
          className="hover:drop-shadow-[0_4px_3px_rgba(119,17,28,0.5)]"
          href="/en"
        >
          🇺🇸
        </Link>
      ) : (
        <Link
          className="hover:drop-shadow-[0_4px_3px_rgba(0,150,54,0.5)]"
          href="/br"
        >
          🇧🇷
        </Link>
      )}
    </div>
  )
}
