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
      <section className="relative z-10 flex h-screen items-center justify-center">
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
              className="rounded-md border border-black bg-white p-2 hover:bg-primaryColor-100/20 transition"
            >
              <LuGithub size={24} color="black" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/miguel-bomfim/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-black bg-white p-2 hover:bg-primaryColor-100/20 transition"
            >
              <FaLinkedinIn size={24} color="black" />
            </Link>
            <Link
              href="https://www.instagram.com/miguellbomfim/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-black bg-white p-2 hover:bg-primaryColor-100/20 transition"
            >
              <LuInstagram size={24} color="black" />
            </Link>
          </div>
        </header>

        <Carousel />
      </section>

      {/* Sobre mim */}
      <section className="relative z-10 bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">

          {/* Section header */}
          <div className="mb-12 flex flex-col items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-primaryColor-100">
              Quem sou eu
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
              Sobre mim
            </h2>
            <div className="h-[3px] w-10 rounded-full bg-gradient-to-r from-primaryColor-100 to-teal-400" />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-4 text-base leading-relaxed text-gray-600">
              <p>
                Olá! Sou Miguel Bomfim, desenvolvedor web fullstack com mais de 4 anos de
                experiência construindo aplicações modernas, performáticas e focadas na
                experiência do usuário.
              </p>
              <p>
                Trabalho com todo o ciclo do produto — do design de interfaces ao back-end e
                infraestrutura — usando tecnologias como React, Next.js, Node.js, Angular e
                Docker. Tenho paixão por código limpo, boas práticas e por transformar ideias
                em produtos digitais que realmente funcionam.
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Stack principal
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Angular', 'React', 'Next.js', 'Node.js', 'TypeScript',
                  'Docker', 'SQL', 'Prisma', 'Git', 'Tailwind CSS',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primaryColor-100 bg-blue-50 px-3 py-1 text-sm font-medium text-primaryColor-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="relative z-10 bg-[#f9f9f9] px-6 py-20">
        <div className="mx-auto max-w-5xl">

          {/* Section header */}
          <div className="mb-12 flex flex-col items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-primaryColor-100">
              O que construí
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
              Projetos
            </h2>
            <div className="h-[3px] w-10 rounded-full bg-gradient-to-r from-primaryColor-100 to-teal-400" />
          </div>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project, idx) => (
              <li key={idx}>
                <Link
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={project.projectPics[0].url}
                      width={project.projectPics[0].width}
                      height={project.projectPics[0].height}
                      alt={`Screenshot do projeto ${project.projectTitle}`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-sm font-semibold text-[#1a1a1a]">
                      {project.projectTitle}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-primaryColor-100">
                      Ver projeto
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
