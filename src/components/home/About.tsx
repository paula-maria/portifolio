import { SectionTitle } from '@/components/ui/SectionTitle'

export function About() {
  return (
    <section id="sobre" className="section">
      <SectionTitle>SOBRE MIM</SectionTitle>
      <div className="about-layout">
        <div className="about-photo" data-animate>
          <img
            src="/images/profile/paula.jpg"
            alt="Paula Maria Costa"
            className="about-photo__img"
            loading="lazy"
          />
        </div>
        <div className="about-text" data-animate style={{ '--delay': '100ms' } as React.CSSProperties}>
          <p>
            Sou <strong>Paula Maria Costa</strong>, graduanda em Ciência da Computação na UNIFAP e
            desenvolvedora apaixonada por tecnologia e impacto social.
          </p>
          <p>
            Atuo no desenvolvimento de soluções para o setor público, análise de dados e
            desenvolvimento web full stack, participando de projetos que promovem a transformação
            digital e melhorias reais na vida das pessoas.
          </p>
          <p>
            Acredito na tecnologia como ferramenta para construir um futuro mais eficiente,
            inclusivo e humano.
          </p>
        </div>
      </div>
    </section>
  )
}
