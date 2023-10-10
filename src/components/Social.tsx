import { FileText, Github, Linkedin } from 'lucide-react'
import React from 'react'

export default function Social({ pathname }: { pathname: string }) {
  return (
    <ul className="flex grow justify-evenly">
      <li>
        <a
          target="_blank"
          href="https://linkedin.com/in/miguel-bomfim"
          rel="noreferrer"
        >
          <Linkedin
            className="delay-50 rounded-lg border-2 bg-[#0a66c2] fill-white p-2 transition hover:scale-105"
            color="#0a66c2"
            size={'5vw'}
            absoluteStrokeWidth
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://github.com/miguel-bomfim"
          rel="noreferrer"
        >
          <Github
            className="delay-50 rounded-lg border-2 bg-gray-100 fill-black p-2 transition hover:scale-105"
            size={'5vw'}
            absoluteStrokeWidth
          />
        </a>
      </li>
      <li>
        <a
          href={
            pathname === ('/' || '/br') ? 'curriculo-miguel' : '/cv-miguel.pdf'
          }
          download={
            pathname === ('/' || '/br') ? 'Currículo Miguel' : 'CV Miguel'
          }
        >
          <FileText
            className="delay-50 rounded-lg border-2 bg-black fill-white p-2 transition hover:scale-105"
            size={'5vw'}
            absoluteStrokeWidth
          />
        </a>
      </li>
    </ul>
  )
}
