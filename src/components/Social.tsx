import {
  FaLinkedin as LinkedIn,
  FaGithubSquare as GitHub,
} from 'react-icons/fa'
import { SiGoogledocs as Doc } from 'react-icons/si'

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
          <LinkedIn className="bg-white fill-[#0a66c2] text-8xl transition delay-75 hover:scale-105" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://github.com/miguel-bomfim"
          rel="noreferrer"
        >
          <GitHub className="text-8xl transition delay-75 hover:scale-105" />
        </a>
      </li>
      <li>
        <a
          href={
            pathname === ('/' || '/br')
              ? '/curriculo-miguel.pdf'
              : '/cv-miguel.pdf'
          }
          download={
            pathname === ('/' || '/br') ? 'Currículo Miguel' : 'CV Miguel'
          }
        >
          <Doc className="delay-50 text-8xl transition hover:scale-105" />
        </a>
      </li>
    </ul>
  )
}
