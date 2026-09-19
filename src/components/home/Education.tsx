import { SectionTitle } from '@/components/ui/SectionTitle'
import { education } from '@/data/education'

export function Education() {
  return (
    <section id="formacao" className="section">
      <SectionTitle>FORMAÇÃO</SectionTitle>
      <ol className="timeline" aria-label="Histórico de formação">
        {education.map((item, i) => (
          <li
            key={item.id}
            className="timeline-item"
            data-animate
            style={{ '--delay': `${i * 80}ms` } as React.CSSProperties}
          >
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-meta">
              <span className="timeline-period">{item.period}</span>
              <span className="timeline-company">{item.institution}</span>
            </div>
            <div className="timeline-body">
              <h3 className="timeline-role">{item.degree}</h3>
              {item.description && (
                <p className="timeline-desc">{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
