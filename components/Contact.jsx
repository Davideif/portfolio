import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>Contact</span>
        <h2 className={styles.title}>Let's work together</h2>
        <p className={styles.desc}>
          I'm actively looking for junior developer roles. If you think I'd be
          a good fit, I'd love to hear from you.
        </p>

        <a href="mailto:dpmcantabria1994@gmail.com" className={styles.emailBtn}>
          dpmcantabria1994@gmail.com ↗
        </a>

        <div className={styles.links}>
          <a
            href="https://github.com/Davideif"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <span className={styles.divider}>·</span>
          <a
            href="https://www.linkedin.com/in/david-perez-merino-802b61265/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <span className={styles.divider}>·</span>
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Download CV
          </a>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerText}>
            Built with Next.js & deployed on Vercel.
          </p>
          <p className={styles.footerText}>
            © {new Date().getFullYear()} David Perez Merino
          </p>
        </div>
      </div>
    </section>
  )
}