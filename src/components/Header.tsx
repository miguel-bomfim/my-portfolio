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
        'flex h-screen flex-col content-center items-center justify-center p-8 md:grid',
        {
          'grid-cols-0': pathname === ('/' || '/br'),
        },
      )}
    >
      <p className="font-mono text-2xl font-thin uppercase leading-none antialiased md:text-[1.5vw]">
        {t('hi')}
      </p>
      <div className="flex gap-1 justify-self-center md:flex-col md:gap-0">
        <div className="flex items-center justify-between">
          <p
            className={clsx(
              'grow text-2xl font-bold uppercase leading-none antialiased',
              {
                'md:text-[4vw]': pathname === ('/' || '/br'),
                'md:text-[7vw]': pathname === '/en',
              },
            )}
          >
            {t('jobTitle').split(' ')[0]}
          </p>
          {!isMobile && <Social pathname={pathname} />}
        </div>
        <p className="text-2xl font-bold uppercase leading-none antialiased md:text-[10vw]">
          {t('jobTitle').split(' ')[1]}
        </p>
      </div>
      <p className="w-2/3 self-end justify-self-end text-end font-mono font-thin uppercase leading-none antialiased md:text-[1.5vw]">
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
