import { contacts } from '../data/portfolio'
import SectionTitle from './SectionTitle'

export default function HeroSummaryBlock() {
  return (
    <>
      <header className="hero">
        <div className="rule" data-reveal />
        <h1 data-reveal style={{ '--reveal-delay': '90ms' }}>
          <span>Paula Maria</span>
          <span>Lacerda de Oliveira Costa</span>
        </h1>
        <p className="subtitle" data-reveal style={{ '--reveal-delay': '180ms' }}>
          Frontend-focused Fullstack Developer · B.Sc. Ciência da Computação (UNIFAP)
        </p>
        <address className="contact-strip" data-reveal style={{ '--reveal-delay': '260ms' }}>
          {contacts.map(({ icon: Icon, text, href }) => {
            const content = (
              <>
                <Icon size={14} strokeWidth={1.9} />
                <span>{text}</span>
              </>
            )

            return href ? (
              <a key={text} href={href}>{content}</a>
            ) : (
              <span key={text}>{content}</span>
            )
          })}
        </address>
      </header>

      <section className="summary-section" id="resumo" data-reveal>
        <SectionTitle>Resumo Profissional</SectionTitle>
        <p>
          Desenvolvedora Fullstack com foco em Frontend e experiência prática na construção e
          manutenção de sistemas web em ambientes de setor público e pesquisa. Cursando
          Bacharelado em Ciência da Computação na UNIFAP, aplicando tecnologias web modernas
          em produção. Apaixonada por desenvolvimento assistido por IA, integração de LLMs e
          criação de experiências de usuário rápidas e escaláveis. Prospera em ambientes
          dinâmicos onde a responsabilidade é ponta a ponta e a velocidade de iteração importa.
        </p>
      </section>
    </>
  )
}
