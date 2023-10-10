'use client'

import Header from '@/components/Header'
import IntlButtons from '@/components/IntlButtons'
import { usePathname } from 'next/navigation'

export default function Index() {
  const pathname = usePathname()

  return (
    <>
      <IntlButtons pathname={pathname} />
      <div className="flex justify-center">
        <Header pathname={pathname} />
      </div>
    </>
  )
}
