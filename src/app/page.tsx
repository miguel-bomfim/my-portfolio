import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import { LuGithub, LuInstagram } from 'react-icons/lu'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Home() {
  const mockPortfolioItems = [
    {
      title: 'Coming soon',
      img: {
        url: '',
        // url: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      link: '#',
    },
    {
      title: 'Coming soon',
      img: {
        url: '',
        // url: 'https://images.unsplash.com/photo-1717376280564-0fd179a9695a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      link: '#',
    },
  ]

  return (
    <main className="flex flex-col items-center p-10 text-slate-100">
      <header className="flex h-[90vh] flex-col items-center justify-center px-4 text-center">
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
            className="rounded-md border border-black p-2 hover:bg-primaryColor-100/20"
          >
            <LuGithub size={24} color="black" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/miguel-bomfim/"
            target="_blank"
            className="rounded-md border border-black p-2 hover:bg-primaryColor-100/20"
          >
            <FaLinkedinIn size={24} color="black" />
          </Link>

          <Link
            href="https://www.instagram.com/miguellbomfim/"
            target="_blank"
            className="rounded-md border border-black p-2 hover:bg-primaryColor-100/20"
          >
            <LuInstagram size={24} color="black" />
          </Link>
        </div>
      </header>

      <div className="pb-10 text-center">
        <h2 className="my-3 text-black">Projects</h2>

        <ul className="grid gap-3 md:grid-cols-2">
          {mockPortfolioItems.map((portfolioItem, idx) => (
            <li key={idx} className="w-96">
              <Link href={portfolioItem.link} className="flex flex-col">
                <Image
                  src={portfolioItem.img.url}
                  alt=""
                  className="h-48 rounded-t border-x border-t border-teal-100 bg-[#202020] object-cover px-3 pt-3"
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
  )
}
