import { experience } from '../data/portfolio'
import SectionTitle from './SectionTitle'

export default function ExperienceBlock() {
  return (
    <section className="experience-section" id="experiencia" data-reveal>
      <SectionTitle>Experiência Profissional</SectionTitle>
      <div className="timeline">
        <div className="timeline-meta" data-reveal style={{ '--reveal-delay': '110ms' }}>
          <strong>Março 2026 - Presente</strong>
          <span>Macapá, Brasil · Presencial</span>
        </div>
        <div className="timeline-content" data-reveal style={{ '--reveal-delay': '180ms' }}>
          <h3>Estagiária de TI - Desenvolvedora Fullstack (Foco Frontend)</h3>
          <p>PRODAP - Centro de Gestão da Tecnologia da Informação</p>
          <ul>
            {experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
