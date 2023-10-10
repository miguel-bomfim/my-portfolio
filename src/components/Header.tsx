import React from 'react'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Header() {
  const t = useTranslations('IndexPage')
  const pathname = usePathname()

  return (
    <div
      className={clsx('grid h-screen content-center justify-center p-8', {
        'grid-cols-0': pathname === '/',
      })}
    >
      <p className="font-sans text-[1.5vw] uppercase leading-none">{t('hi')}</p>
      <div className="flex flex-col justify-self-center">
        <p className="text-[7vw] font-bold uppercase leading-none">
          {t('jobTitle').split(' ')[0]}
        </p>
        <p className="text-[10vw] font-bold uppercase leading-none">
          {t('jobTitle').split(' ')[1]}
        </p>
      </div>
      <p className="w-2/3 justify-self-end text-end font-sans text-[1.5vw] uppercase leading-none">
        {t('bye')}
      </p>
    </div>
  )
}
