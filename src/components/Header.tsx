import React from 'react'

import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import Social from '@/components/Social'

export default function Header({ pathname }: { pathname: string }) {
  const t = useTranslations('HeaderComponent')

  return (
    <div
      className={clsx('grid h-screen content-center justify-center p-8', {
        'grid-cols-0': pathname === ('/' || '/br'),
      })}
    >
      <p className="font-mono text-[1.5vw] uppercase leading-none antialiased">
        {t('hi')}
      </p>
      <div className="flex flex-col justify-self-center">
        <div className="flex items-center justify-between">
          <p
            className={clsx(
              'grow font-bold uppercase leading-none antialiased',
              {
                'text-[4vw]': pathname === ('/' || '/br'),
                'text-[7vw]': pathname === '/en',
              },
            )}
          >
            {t('jobTitle').split(' ')[0]}
          </p>
          <Social pathname={pathname} />
        </div>
        <p className=" text-[10vw] font-bold uppercase leading-none antialiased">
          {t('jobTitle').split(' ')[1]}
        </p>
      </div>
      <p className=" w-2/3 justify-self-end text-end font-mono text-[1.5vw] uppercase leading-none antialiased">
        {t('bye')}
      </p>
    </div>
  )
}
