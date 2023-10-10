import React from 'react'

import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import Social from '@/components/Social'

export default function Header({ pathname }: { pathname: string }) {
  const t = useTranslations('HeaderComponent')

  return (
    <div
      className={clsx('grid h-screen content-center justify-center p-8', {
        'grid-cols-0': pathname === '/',
      })}
    >
      <p className="font-mono text-[1.5vw] uppercase leading-none">{t('hi')}</p>
      <div className="flex flex-col justify-self-center">
        <div className="flex items-center justify-between">
          <p className="grow text-[7vw] font-bold uppercase leading-none">
            {t('jobTitle').split(' ')[0]}
          </p>
          <Social pathname={pathname} />
        </div>
        <p className="text-[10vw] font-bold uppercase leading-none">
          {t('jobTitle').split(' ')[1]}
        </p>
      </div>
      <p className="w-2/3 justify-self-end text-end font-mono text-[1.5vw] uppercase leading-none">
        {t('bye')}
      </p>
    </div>
  )
}
