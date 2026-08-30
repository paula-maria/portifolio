import { projects, skills } from '../data/portfolio'
import SectionTitle from './SectionTitle'

export default function SkillsProjectsBlock() {
  return (
    <>
      <section className="skills-section" id="habilidades" data-reveal>
        <SectionTitle>Habilidades</SectionTitle>
        <div className="skill-grid">
          {skills.map((skill, index) => (
            <span
              key={skill}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(index * 35, 260)}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projetos" data-reveal>
        <SectionTitle>Projetos</SectionTitle>
        <div className="project-grid">
          {projects.map(({ title, description, icon: Icon }, index) => (
            <article
              className="project-card"
              key={title}
              data-reveal
              style={{ '--reveal-delay': `${index * 120}ms` }}
            >
              <Icon size={19} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
