const STEPS = [
  {
    number: '01',
    title: 'ENTENDER',
    description: 'Compreender o problema, os usuários e os objetivos antes de escrever qualquer linha de código.',
  },
  {
    number: '02',
    title: 'PLANEJAR',
    description: 'Estruturar requisitos, mapear fluxos e definir a solução mais adequada ao contexto.',
  },
  {
    number: '03',
    title: 'PROJETAR',
    description: 'Definir arquitetura, tecnologias e estrutura de dados com foco em manutenibilidade.',
  },
  {
    number: '04',
    title: 'DESENVOLVER',
    description: 'Implementar, integrar e validar a solução iterativamente.',
  },
  {
    number: '05',
    title: 'ENTREGAR',
    description: 'Disponibilizar a solução e evoluir conforme o feedback e as necessidades reais.',
  },
] as const

export function Process() {
  return (
    <section className="section process-section">
      <div
        className="process-intro"
        data-animate
      >
        <p className="process-intro__quote">
          Minha experiência em projetos reais me ensinou que desenvolver software não começa no código.
        </p>
        <h2 className="process-intro__heading">COMO EU DESENVOLVO</h2>
      </div>

      <ol className="process-steps" aria-label="Processo de desenvolvimento">
        {STEPS.map((step, i) => (
          <li
            key={step.number}
            className="process-step"
            data-animate
            style={{ '--delay': `${i * 70}ms` } as React.CSSProperties}
          >
            <div className="process-step__connector" aria-hidden="true">
              <span className="process-step__number">{step.number}</span>
              {i < STEPS.length - 1 && (
                <span className="process-step__line" aria-hidden="true" />
              )}
            </div>
            <div className="process-step__body">
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
