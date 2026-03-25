'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>DP<span className={styles.dot}>.</span></a>
        <div className={styles.links}>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#contact" className={styles.link}>Contact</a>
          <a
            href="https://github.com/Davideif"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}