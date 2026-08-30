export interface ExperienceItem {
  id: string
  period: string
  company: string
  role: string
  description: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: '1',
    period: '2024 — Atual',
    company: 'TJAP — Tribunal de Justiça do Estado do Amapá',
    role: 'Residente Tecnológico em Desenvolvimento de Software',
    description:
      'Desenvolvimento de software, dashboards para análise de dados judiciais e automação de processos.',
    bullets: [
      'Construção de dashboards analíticos com Python e Streamlit integrados ao PostgreSQL',
      'Desenvolvimento e manutenção de aplicações web com React e TypeScript',
      'Automação de relatórios e indicadores processuais para apoio à gestão',
      'Documentação técnica de sistemas e requisitos de software',
    ],
  },
  {
    id: '2',
    period: '2024 — Atual',
    company: 'PET Saúde Digital no Meio do Mundo — UNIFAP',
    role: 'Bolsista de TI',
    description: 'Desenvolvimento de soluções tecnológicas para projetos de saúde digital, desenvolvimento web e análise de dados.',
    bullets: [
      'Desenvolvimento de sistemas de saúde digital do estado do Amapá',
      'Gestão e Análise de requisitos',
      '',
    ],
  },
  {
    id: '3',
    period: '2023 — 2024',
    company: 'PRODAP — Governo do Estado do Amapá',
    role: 'Estagiária em Desenvolvimento Web',
    description:
      'Desenvolvimento de sistemas internos, desenvolvimento web, gestão de demandas e transformação digital.',
    bullets: [
      'Desenvolvimento fullstack de sistemas governamentais com Laravel e React',
      'Gestão de demandas com equipe técnica',
      'Aplicação de ',
      'Implementação de features para portais e sistemas de governo',
      'Containerização de aplicações com Docker',
    ],
  },
  {
    id: '4',
    period: '2022 — 2023',
    company: 'IFAP — Instituto Federal do Amapá',
    role: 'Estagiária de Suporte de TI',
    description:
      'Infraestrutura de redes, administração de ambientes Linux e suporte em redes de computadores.',
    bullets: [
      'Administração de servidores Linux e configuração de redes',
      'Suporte técnico a alunos e docentes',
      'Manutenção de laboratórios de informática',
    ],
  },
]
