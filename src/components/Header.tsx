import React from 'react'

import { useTranslations } from 'next-intl'

export default function Header() {
  const t = useTranslations('IndexPage')
  return (
    <div className="inline-grid h-screen grid-cols-1 content-center justify-center p-8 ">
      <p className="hyphens-auto break-words text-xl uppercase">{t('hi')}</p>
      <h1 className="justify-self-center hyphens-auto break-words text-8xl font-bold uppercase">
        {t('jobTitle')}
      </h1>
      <p className="w-2/3 justify-self-end hyphens-auto break-words text-xl uppercase">
        {t('bye')}
      </p>
    </div>
  )
}
