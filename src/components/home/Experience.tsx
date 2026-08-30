import { SectionTitle } from '@/components/ui/SectionTitle'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experiencia" className="section">
      <SectionTitle>EXPERIÊNCIA</SectionTitle>
      <ol className="timeline" aria-label="Histórico de experiências">
        {experience.map((item, i) => (
          <li
            key={item.id}
            className="timeline-item"
            data-animate
            style={{ '--delay': `${i * 80}ms` } as React.CSSProperties}
          >
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-meta">
              <span className="timeline-period">{item.period}</span>
              <span className="timeline-company">{item.company}</span>
            </div>
            <div className="timeline-body">
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-desc">{item.description}</p>
              <ul className="timeline-bullets">
                {item.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
