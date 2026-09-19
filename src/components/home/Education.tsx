import { SectionTitle } from '@/components/ui/SectionTitle'
import { education } from '@/data/education'

export function Education() {
  const academic = education.filter(e => e.type === 'academic')
  const courses  = education.filter(e => e.type === 'course')

  return (
    <section id="formacao" className="section">
      <SectionTitle>FORMAÇÃO</SectionTitle>

      {/* ── Acadêmica ─────────────────────────────────────────────── */}
      <ol className="timeline" aria-label="Formação acadêmica">
        {academic.map((item, i) => (
          <li
            key={item.id}
            className="timeline-item"
            data-animate
            style={{ '--delay': `${i * 80}ms` } as React.CSSProperties}
          >
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-meta">
              {item.period && <span className="timeline-period">{item.period}</span>}
              <span className="timeline-company">{item.institution}</span>
            </div>
            <div className="timeline-body">
              <h3 className="timeline-role">{item.degree}</h3>
            </div>
          </li>
        ))}
      </ol>

      {/* ── Cursos complementares ──────────────────────────────────── */}
      <h3 className="education-courses-title" data-animate>CURSOS COMPLEMENTARES</h3>
      <ul className="education-courses" aria-label="Cursos complementares">
        {courses.map((item, i) => (
          <li
            key={item.id}
            className="education-course"
            data-animate
            style={{ '--delay': `${i * 50}ms` } as React.CSSProperties}
          >
            <span className="education-course__degree">{item.degree}</span>
            <span className="education-course__institution">{item.institution}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
