'use client'

import { useTranslations } from 'next-intl'
import Header from '@/components/Header'

export default function Index() {
  const t = useTranslations('IndexPage')
  return (
    <div className="flex justify-center">
      <Header />
    </div>
  )
}
