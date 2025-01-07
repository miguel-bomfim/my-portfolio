'use client'

import { useState, useEffect } from 'react'

import useParticleOptions from '@/hooks/useParticleOptions'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBackground() {
  const particleOptions = useParticleOptions()
  const [mounted, setMounted] = useState(false)
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={particleOptions}
          className="absolute inset-0"
        />
      )}
    </>
  )
}
