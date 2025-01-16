import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import { LuGithub, LuInstagram } from 'react-icons/lu'
import { FaLinkedinIn } from 'react-icons/fa'
import Carousel from '@/components/Carousel'
import ParticlesBackground from '@/components/ParticlesBackground'
import { fetchProjects } from '@/services/hygraphApi'

export default async function Home() {
  const projects = await fetchProjects()

  return (
    <main>
      <ParticlesBackground />
      <section className="relative z-10 flex h-screen items-center justify-center text-slate-100">
        <header className="flex flex-col items-center px-4 text-center">
          <h1 className="mb-4 text-6xl font-bold text-[#262626] md:text-8xl">
            Miguel Bomfim
          </h1>
          <h2 className="mb-8 text-3xl md:text-5xl px-4">
            <span className="bg-gradient-to-r from-primaryColor-100 to-teal-400 bg-clip-text font-semibold text-transparent">
              Analista e Desenvolvedor de Sistemas
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
      </section>

      <section className="relative z-10 bg-white px-6 mb-16">
        <div className="flex flex-col items-center py-8 text-center">
          <h3 className="mt-3 mb-6 text-2xl text-black underline">Projetos</h3>

          <ul className="grid gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project, idx) => (
              <li key={idx} className="w-80 md:w-80">
                <Link
                  target="_blank"
                  href={project.projectLink}
                  className="flex flex-col hover:contrast-150 transition"
                >
                  <Image
                    src={project.projectPics[0].url}
                    width={project.projectPics[0].width}
                    height={project.projectPics[0].height}
                    alt=""
                    className="h-48 w-full rounded-t border-x border-t border-black bg-[#202020] object-cover"
                  />
                  <span className="w-[103%] self-center bg-black p-3 text-white rounded border-x">
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
