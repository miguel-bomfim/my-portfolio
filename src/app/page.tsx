import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import Carousel from "@/components/Carousel";
import ParticlesBackground from "@/components/ParticlesBackground";
import { fetchProjects } from "@/services/hygraphApi";

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <main>
      <ParticlesBackground />
      <section className="relative z-10 flex h-screen items-center justify-center text-slate-100">
        <header className="flex flex-col items-center px-4 text-center">
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
      </section>

      <section className="relative z-10 bg-white px-6">
        <div className="flex flex-col items-center py-8 text-center">
          <h3 className="my-3 text-2xl text-black">Projects</h3>

          <ul className="grid gap-3 px-4 md:grid-cols-2">
            {projects?.map((project, idx) => (
              <li key={idx} className="w-72 md:w-80">
                <Link
                  target="_blank"
                  href={project.projectLink}
                  className="flex flex-col"
                >
                  <Image
                    src={project.projectPics[0].url}
                    width={project.projectPics[0].width}
                    height={project.projectPics[0].height}
                    alt=""
                    className="h-48 w-full rounded-t border-x border-t border-black bg-[#202020] object-cover"
                  />
                  <span className="w-full bg-black p-3 text-white">
                    {project.projectTitle}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
