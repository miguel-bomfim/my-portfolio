'use client'

import Header from '@/components/Header'
import IntlButtons from '@/components/IntlButtons'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Index() {
  const pathname = usePathname()

  return (
    <>
      <IntlButtons pathname={pathname} />
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Header pathname={pathname} />
      </motion.div>
    </>
  )
}
