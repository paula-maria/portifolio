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
    period: 'Jul 2026 — Atual',
    company: 'TJAP — Tribunal de Justiça do Estado do Amapá',
    role: 'Residente Tecnológica em Desenvolvimento de Software',
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
    period: 'Ago 2025 — Atual',
    company: 'PET Saúde Digital no Meio do Mundo — UNIFAP',
    role: 'Bolsista de TI',
    description: 'Desenvolvimento de soluções tecnológicas para projetos de saúde digital, desenvolvimento web e análise de dados.',
    bullets: [
      'Desenvolvimento de sistemas de saúde digital do estado do Amapá',
      'Gestão e Análise de requisitos',
    ],
  },
  {
    id: '3',
    period: '2026',
    company: 'Restaurante Lettuce',
    role: 'Desenvolvedora Freelance',
    description:
      'Desenvolvimento de sistema completo de gestão de pedidos com painel de senhas em tempo real.',
    bullets: [
      'Desenvolvimento fullstack do sistema: API REST + WebSocket com FastAPI e frontend React',
      'Modelagem do banco de dados PostgreSQL com SQLAlchemy e controle de migrações via Alembic',
      'Implementação de comunicação em tempo real entre painel da cozinha e painel TV via WebSocket',
      'Geração automática de senhas sequenciais e fluxo completo de status dos pedidos',
    ],
  },
  {
    id: '4',
    period: 'Mar 2026 — Jul 2026',
    company: 'PRODAP — Governo do Estado do Amapá',
    role: 'Estagiária em Desenvolvimento Web',
    description:
      'Desenvolvimento de sistemas internos, desenvolvimento web, gestão de demandas e transformação digital.',
    bullets: [
      'Desenvolvimento fullstack de sistemas governamentais com Laravel e React',
      'Gestão de demandas com equipe técnica',
      'Implementação de features para portais e sistemas de governo',
      'Containerização de aplicações com Docker',
    ],
  },
  {
    id: '5',
    period: 'Jul 2022 — Nov 2022',
    company: 'IFAP — Instituto Federal do Amapá',
    role: 'Estagiária de Suporte de TI',
    description:
      'Infraestrutura de redes, administração de ambientes Linux e suporte em redes de computadores.',
    bullets: [
      'Administração de servidores Linux e configuração de redes',
      'Suporte técnico a alunos e docentes',
      'Manutenção e instalação de computadores',
    ],
  },
]
