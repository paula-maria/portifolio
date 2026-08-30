import { SectionTitle } from '@/components/ui/SectionTitle'
import { technologies } from '@/data/technologies'

const CATEGORY_LABELS: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  data: 'Dados',
  infra: 'Infra & DevOps',
}

export function Technologies() {
  const categories = ['frontend', 'backend', 'data', 'infra'] as const

  return (
    <section id="tecnologias" className="section">
      <SectionTitle>TECNOLOGIAS</SectionTitle>
      <div className="tech-grid">
        {categories.map((cat, ci) => {
          const items = technologies.filter((t) => t.category === cat)
          return (
            <div
              key={cat}
              className="tech-group"
              data-animate
              style={{ '--delay': `${ci * 80}ms` } as React.CSSProperties}
            >
              <h3 className="tech-group__label">{CATEGORY_LABELS[cat]}</h3>
              <ul className="tech-list">
                {items.map((tech) => (
                  <li key={tech.name} className="tech-tag">
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
