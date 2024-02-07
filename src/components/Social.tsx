import { FaLinkedin as LinkedIn, FaGithub as GitHub } from 'react-icons/fa'
import { SiGoogledocs as Doc } from 'react-icons/si'

import React from 'react'

export default function Social({ pathname }: { pathname: string }) {
  return (
    <ul className="z-20 mt-8 flex gap-2 md:mt-0 md:pr-8">
      <li>
        <a
          target="_blank"
          href="https://linkedin.com/in/miguel-bomfim"
          rel="noreferrer"
        >
          <LinkedIn className=" delay-25 fill-[#0a66c2] text-5xl transition ease-linear hover:scale-110 md:fill-[#a4c2e0] md:text-[3.5vw] md:hover:fill-[#0a66c2]" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://github.com/miguel-bomfim"
          rel="noreferrer"
        >
          <GitHub className="delay-25 h-auto fill-gray-800 text-5xl transition ease-linear hover:scale-110 hover:fill-gray-800 md:fill-gray-200 md:text-[3.5vw] " />
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
          <Doc className="delay-25 fill-black text-5xl transition ease-linear hover:scale-110 md:fill-gray-300 md:text-[3.5vw] md:hover:fill-black" />
        </a>
      </li>
    </ul>
  )
}
