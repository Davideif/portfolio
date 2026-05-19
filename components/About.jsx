import styles from './About.module.css'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Shadcn UI'] },
  { category: 'Backend', items: ['Node.js', 'MongoDB', 'Mongoose', 'REST APIs', 'SQL', 'Supabase'] },
  { category: 'Tools', items: ['Git & GitHub', 'Vercel', 'VS Code'] },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.left}>
            <span className={styles.label}>About</span>
            <h2 className={styles.title}>A bit about me</h2>
            <p className={styles.text}>
              I'm a self-taught full-stack developer with foundation degree in Computing by University of Greenwich based in London.
              I got into web development because I love building things that people
              actually use — from the database to the UI.
            </p>
            <p className={styles.text}>
              I recently completed a full-stack blog CMS with authentication,
              a protected admin dashboard, and a public-facing blog. Currently looking
              for my first professional role as a web developer.
            </p>
            <p className={styles.text}>
              When I'm not coding, I'm reading, cooking , or exploring new places.
            </p>
          </div>

          <div className={styles.right}>
            {skills.map((group) => (
              <div key={group.category} className={styles.group}>
                <p className={styles.groupTitle}>{group.category}</p>
                <div className={styles.items}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}