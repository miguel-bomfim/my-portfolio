import React from 'react'
import styles from './styles/Carousel.module.css'
import { FaReact, FaNodeJs, FaGit, FaDocker } from 'react-icons/fa'
import { SiTailwindcss, SiPrisma } from 'react-icons/si'

const images = [
  <FaReact key={1} size={48} color="white" />,
  <FaNodeJs key={2} size={48} color="white" />,
  <SiTailwindcss key={3} size={48} color="white" />,
  <FaGit key={3} size={48} color="white" />,
  <FaDocker key={3} size={48} color="white" />,
  <SiPrisma key={3} size={48} color="white" />,
]

const Carousel: React.FC = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.group}>
        {images.map((src, index) => (
          <div className={`${styles.icon} ${styles.tooltip}`} key={index}>
            {src}
            <span className={styles.tooltiptext}>Tooltip text</span>
          </div>
        ))}
      </div>
      <div aria-hidden className={styles.group}>
        {images.map((src, index) => (
          <div className={`${styles.icon} ${styles.tooltip}`} key={index}>
            {src}
            <span className={styles.tooltiptext}>Tooltip text</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
