'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import { LuGithub, LuInstagram } from 'react-icons/lu'
import { FaLinkedinIn } from 'react-icons/fa'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import useParticleOptions from '@/hooks/useParticleOptions'
import Carousel from '@/components/Carousel'

import eumeme from '@/assets/eumeme.gif'

export default function Home() {
  const particleOptions = useParticleOptions()

  const mockPortfolioItems = [
    {
      title: 'Coming soon',
      img: {
        url: '/',
      },
      link: '#',
    },
    {
      title: 'Coming soon',
      img: {
        url: '/',
      },
      link: '#',
    },
  ]

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
    <div>
      {init && (
        <Particles
          id="tsparticles"
          options={particleOptions}
          className="absolute inset-0"
        />
      )}
      <main className="relative z-10 flex flex-col items-center p-10 text-slate-100">
        <header className="flex h-[80vh] flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-6xl font-bold text-[#262626] md:text-8xl">
            Miguel Bomfim
          </h1>
          <h2 className="mb-8 text-3xl md:text-5xl">
            <span className="bg-gradient-to-r from-primaryColor-100 to-teal-400 bg-clip-text font-semibold text-transparent">
              Systems analyst and developer
            </span>
          </h2>

          <div className="flex items-center gap-2 p-4">
            <Link
              href="https://github.com/miguel-bomfim"
              target="_blank"
              className="rounded-md border border-black bg-white p-2 hover:bg-primaryColor-100/20"
            >
              <LuGithub size={24} color="black" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/miguel-bomfim/"
              target="_blank"
              className="rounded-md border border-black bg-white p-2 hover:bg-primaryColor-100/20"
            >
              <FaLinkedinIn size={24} color="black" />
            </Link>

            <Link
              href="https://www.instagram.com/miguellbomfim/"
              target="_blank"
              className="rounded-md border border-black bg-white p-2 hover:bg-primaryColor-100/20"
            >
              <LuInstagram size={24} color="black" />
            </Link>
          </div>
        </header>

        <Carousel />

        <div className="py-10 text-center">
          <h2 className="my-3 text-black">Projects</h2>

          <ul className="grid gap-3 md:grid-cols-2">
            {mockPortfolioItems.map((portfolioItem, idx) => (
              <li key={idx} className="w-96">
                <Link href={portfolioItem.link} className="flex flex-col">
                  <Image
                    src={eumeme}
                    width={100}
                    height={100}
                    alt=""
                    className="h-48 w-full rounded-t border-x border-t border-teal-100 bg-[#202020] object-cover px-3 pt-3"
                  />
                  <span className="w-full bg-black p-3">
                    {portfolioItem.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
