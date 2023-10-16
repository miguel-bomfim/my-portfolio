import { FaLinkedin as LinkedIn, FaGithub as GitHub } from 'react-icons/fa'
import { SiGoogledocs as Doc } from 'react-icons/si'

import React from 'react'

export default function Social({ pathname }: { pathname: string }) {
  return (
    <ul className="mt-8 flex grow gap-8 md:mt-0">
      <li>
        <a
          target="_blank"
          href="https://linkedin.com/in/miguel-bomfim"
          rel="noreferrer"
        >
          <LinkedIn className=" fill-[#0a66c2] text-5xl transition delay-75 ease-linear hover:scale-110 md:fill-[#a4c2e0] md:text-[3.5vw] md:hover:fill-[#0a66c2]" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://github.com/miguel-bomfim"
          rel="noreferrer"
        >
          <GitHub className="h-auto fill-gray-800 text-5xl transition delay-75 ease-linear hover:scale-110 hover:fill-gray-800 md:fill-gray-200 md:text-[3.5vw] " />
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
          <Doc className="delay-50 fill-black text-5xl transition ease-linear hover:scale-110 md:fill-gray-300 md:text-[3.5vw] md:hover:fill-black" />
        </a>
      </li>
    </ul>
  )
}
