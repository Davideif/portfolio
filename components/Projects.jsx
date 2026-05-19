import styles from './Projects.module.css'

const projects = [
  {
    title: 'Full-Stack Blog CMS',
    description:
      'A complete content management system where admins can create, edit, and delete posts through a protected dashboard, while visitors browse a clean public blog.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'NextAuth', 'Tailwind', 'Vercel','Cloudinary'],
    live: 'https://blogcms-mocha.vercel.app/',
    github: 'https://github.com/Davideif/Blog',
    highlights: [
      'Auth & role-based access',
      'Full CRUD dashboard',
      'Public blog with slug routing',
    ],
    accent: '#E8530A',
  },
  {
    title: 'Principles',
    description:
      'A personal wisdom app that helps users collect lessons from books, podcasts, and life experience — then uses AI to reflect their own principles back during difficult situations and decisions.',
    tags: [
      'Next.js 15',
      'TypeScript',
      'Supabase',
      'NextAuth',
      'Google OAuth',
      'Gemini AI',
      'Tailwind CSS',
      'Shadcn UI',
      'Vercel',
    ],
    live: 'https://principles-green.vercel.app/',
    github: 'https://github.com/Davideif/Principles',
    highlights: [
      'AI-powered situation analysis using personal principles',
      'Google OAuth authentication',
      'Principles library with tagging & sources',
      'Dashboard with stats and situation history',
      'Responsive mobile-first design',
    ],
    accent: '#4F46E5',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Work</span>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.desc}>Things I've built and shipped.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.dot} style={{ background: p.accent }} />
                <div className={styles.cardLinks}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    GitHub ↗
                  </a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    Live demo ↗
                  </a>
                </div>
              </div>

              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.description}</p>

              <ul className={styles.highlights}>
                {p.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    <span className={styles.check}>✓</span> {h}
                  </li>
                ))}
              </ul>

              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </article>
          ))}

          <div className={styles.coming}>
            <p className={styles.comingText}>More projects coming soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}