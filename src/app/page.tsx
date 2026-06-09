import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import { LuGithub, LuInstagram, LuMail } from 'react-icons/lu'
import { FaLinkedinIn } from 'react-icons/fa'
import Carousel from '@/components/Carousel'
import ParticlesBackground from '@/components/ParticlesBackground'
import { fetchProjects } from '@/services/hygraphApi'

export default async function Home() {
  const projects = await fetchProjects()

  return (
    <main>
      <ParticlesBackground />

      {/* Hero */}
      <section className="relative z-10 flex h-screen items-center justify-center text-slate-100">
        <header className="flex flex-col items-center px-4 text-center">
          <h1 className="mb-4 text-6xl font-bold text-[#262626] md:text-8xl">
            Miguel Bomfim
          </h1>
          <h2 className="mb-8 px-4 text-3xl md:text-5xl">
            <span className="bg-gradient-to-r from-primaryColor-100 to-teal-400 bg-clip-text font-semibold text-transparent">
              Analista e Desenvolvedor de Sistemas
            </span>
          </h2>

          <div className="flex items-center gap-2 p-4">
            <Link
              href="https://github.com/miguel-bomfim"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-black bg-white p-2 hover:bg-primaryColor-100/20"
            >
              <LuGithub size={24} color="black" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/miguel-bomfim/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-black bg-white p-2 hover:bg-primaryColor-100/20"
            >
              <FaLinkedinIn size={24} color="black" />
            </Link>
            <Link
              href="https://www.instagram.com/miguellbomfim/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-black bg-white p-2 hover:bg-primaryColor-100/20"
            >
              <LuInstagram size={24} color="black" />
            </Link>
          </div>
        </header>

        <Carousel />
      </section>

      {/* Sobre mim */}
      <section className="relative z-10 bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h3 className="mb-8 text-center text-2xl text-black underline">Sobre mim</h3>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="flex-1 space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                Olá! Sou Miguel Bomfim, analista e desenvolvedor de sistemas apaixonado
                por criar experiências digitais de qualidade. Trabalho com desenvolvimento
                web fullstack, focado em React, Next.js e Node.js.
              </p>
              <p>
                Tenho experiência com arquitetura de sistemas, integração de APIs,
                conteinerização com Docker e bancos de dados relacionais e não-relacionais.
                Gosto de escrever código limpo, bem organizado e fácil de manter.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'React',
                  'Next.js',
                  'Node.js',
                  'TypeScript',
                  'Docker',
                  'Prisma',
                  'Git',
                  'Tailwind CSS',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primaryColor-100 px-3 py-1 text-sm text-primaryColor-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="mailto:seuemail@exemplo.com"
                  className="inline-flex items-center gap-2 rounded-md bg-primaryColor-100 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primaryColor-200"
                >
                  <LuMail size={16} />
                  Entre em contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="relative z-10 bg-white px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-8 text-center text-2xl text-black underline">Projetos</h3>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project, idx) => (
              <li key={idx} className="w-full">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.projectLink}
                  className="group flex flex-col overflow-hidden rounded-md border border-black transition hover:contrast-125"
                >
                  <Image
                    src={project.projectPics[0].url}
                    width={project.projectPics[0].width}
                    height={project.projectPics[0].height}
                    alt={`Screenshot do projeto ${project.projectTitle}`}
                    className="h-48 w-full bg-[#202020] object-cover"
                  />
                  <span className="w-full bg-black p-3 text-center text-sm text-white">
                    {project.projectTitle}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
