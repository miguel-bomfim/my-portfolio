import React from 'react'
import styles from './styles/Carousel.module.css'
import { FaReact, FaNodeJs, FaGit, FaDocker } from 'react-icons/fa'
import { SiTailwindcss, SiPrisma } from 'react-icons/si'
import useMobile from '@/hooks/useIsMobile'

const Carousel: React.FC = () => {
  const isMobile = useMobile()

  const techs = [
    {
      name: 'React',
      icon: <FaReact key={1} size={isMobile ? 36 : 48} color="white" />,
    },
    {
      name: 'NodeJs',
      icon: <FaNodeJs key={2} size={isMobile ? 36 : 48} color="white" />,
    },
    {
      name: 'Tailwindcss',
      icon: <SiTailwindcss key={3} size={isMobile ? 36 : 48} color="white" />,
    },
    {
      name: 'Git',
      icon: <FaGit key={3} size={isMobile ? 36 : 48} color="white" />,
    },
    {
      name: 'Docker',
      icon: <FaDocker key={3} size={isMobile ? 36 : 48} color="white" />,
    },
    {
      name: 'Prisma',
      icon: <SiPrisma key={3} size={isMobile ? 36 : 48} color="white" />,
    },
  ]
  return (
    <div className={`absolute bottom-0 ${styles.carousel}`}>
      <div className={styles.group}>
        {techs.map((tech, index) => (
          <div className={`${styles.icon} ${styles.tooltip}`} key={index}>
            {tech.icon}
            <span className={styles.tooltiptext}>{tech.name}</span>
          </div>
        ))}
      </div>
      <div aria-hidden className={styles.group}>
        {techs.map((tech, index) => (
          <div className={`${styles.icon} ${styles.tooltip}`} key={index}>
            {tech.icon}
            <span className={styles.tooltiptext}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
