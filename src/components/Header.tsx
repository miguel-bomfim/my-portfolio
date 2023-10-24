import React from 'react'

import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import Social from '@/components/Social'
import useIsMobile from '@/hooks/useIsMobile'

export default function Header({ pathname }: { pathname: string }) {
  const t = useTranslations('HeaderComponent')
  const isMobile = useIsMobile()

  return (
    <div
      className={clsx(
        'flex h-[100vh] flex-col items-center justify-center p-8 md:items-baseline md:p-20',
        {
          'grid-cols-0': pathname === ('/' || '/br'),
        },
      )}
    >
      <p className="px-1 font-mono text-2xl font-thin uppercase leading-none antialiased">
        {t('hi')}
      </p>
      <div className="flex items-center px-1 md:w-full md:justify-between">
        <p
          className={clsx(
            'text-4xl font-bold uppercase antialiased md:leading-[0.8]',
            {
              'md:text-[6vw]': pathname === ('/' || '/br'),
              'md:text-[10vw]': pathname === '/en',
            },
          )}
        >
          {t('jobTitle').split(' ')[0]}
        </p>
        {!isMobile && <Social pathname={pathname} />}
      </div>
      <p className="text-4xl font-bold uppercase antialiased md:self-center md:text-[13.4vw] md:leading-[0.9]">
        {t('jobTitle').split(' ')[1]}
      </p>
      <p className="w-2/3 justify-self-end px-1 text-center font-mono font-thin uppercase leading-none antialiased md:w-2/5 md:self-end md:text-end">
        {t('bye')}
      </p>
      {isMobile && (
        <div>
          <Social pathname={pathname} />
        </div>
      )}
    </div>
  )
}
