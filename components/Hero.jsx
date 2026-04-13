import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.badge}>Available for work</div>
        <h1 className={styles.heading}>
          Hi, I'm <span className={styles.name}>David</span>.<br />
          I build things for the web.
        </h1>
        <p className={styles.sub}>
          Full-stack developer focused on Next.js, React, and Node.js.
          I build clean, fast, and user-friendly web applications.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>See my work</a>
          <a href="#contact" className={styles.secondary}>Get in touch</a>
        </div>
        <div className={styles.stack}>
          {['Next.js', 'TypeScript', 'React', 'MongoDB', 'Node.js', 'Tailwind', 'Vercel'].map(tech => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>
      </div>
      <div className={styles.bg} aria-hidden="true" />
    </section>
  )
}