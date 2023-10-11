import { FaLinkedin as LinkedIn, FaGithub as GitHub } from 'react-icons/fa'
import { SiGoogledocs as Doc } from 'react-icons/si'

import React from 'react'

export default function Social({ pathname }: { pathname: string }) {
  // fill-[#0a66c2]
  return (
    <ul className="flex grow gap-2">
      <li>
        <a
          target="_blank"
          href="https://linkedin.com/in/miguel-bomfim"
          rel="noreferrer"
        >
          <LinkedIn className=" fill-[#a4c2e0] text-[3.5vw] transition delay-75 ease-linear hover:scale-110 hover:fill-[#0a66c2]" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://github.com/miguel-bomfim"
          rel="noreferrer"
        >
          <GitHub className="h-auto fill-gray-200 text-[3.5vw] transition delay-75 ease-linear hover:scale-110 hover:fill-gray-800 " />
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
          <Doc className="delay-50 fill-gray-300 text-[3.5vw] transition ease-linear hover:scale-110 hover:fill-black" />
        </a>
      </li>
    </ul>
  )
}
