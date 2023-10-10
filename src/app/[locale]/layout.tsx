import { NextIntlClientProvider, createTranslator } from 'next-intl'
import { notFound } from 'next/navigation'
import { Aboreto } from 'next/font/google'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  params: { locale: string }
}

const aboreto = Aboreto({
  subsets: ['latin'],
  variable: '--font-aboreto',
  weight: '400',
})

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale)

  const t = createTranslator({ locale, messages })

  return {
    title: t('LocaleMetadata.title'),
    description: 'rws',
  }
}

export function generateStaticParams() {
  return [{ locale: 'br' }, { locale: 'en' }]
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: {
    locale: string
  }
}) {
  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={`${aboreto.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
