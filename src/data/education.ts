export interface EducationItem {
  id: string
  period?: string
  institution: string
  degree: string
  type: 'academic' | 'course'
}

export const education: EducationItem[] = [
  {
    id: '1',
    period: '2023 — Atual',
    institution: 'UNIFAP — Universidade Federal do Amapá, Campus Macapá',
    degree: 'Graduação em Ciência da Computação',
    type: 'academic',
  },
  {
    id: '2',
    period: '2019 — 2022',
    institution: 'IFAP — Instituto Federal do Amapá',
    degree: 'Ensino Médio Integrado Técnico em Redes de Computadores',
    type: 'academic',
  },
  {
    id: '3',
    institution: 'Google & Coursera',
    degree: 'Fundamentos em Suporte Técnico',
    type: 'course',
  },
  {
    id: '4',
    institution: 'Google & Coursera',
    degree: 'Administração de Sistemas e Infraestrutura de TI',
    type: 'course',
  },
  {
    id: '5',
    institution: 'Harvard — CS50',
    degree: 'Introdução à Ciência da Computação',
    type: 'course',
  },
  {
    id: '6',
    institution: 'Udemy',
    degree: 'Desenvolvimento Front-End',
    type: 'course',
  },
  {
    id: '7',
    institution: 'Google & Coursera',
    degree: 'Análise de Dados',
    type: 'course',
  },
  {
    id: '8',
    institution: 'Santander Open Academy',
    degree: 'Excel',
    type: 'course',
  },
  {
    id: '9',
    institution: 'SOFTEX',
    degree: 'Capacitação em Desenvolvimento de Recursos Humanos em Inteligência Artificial',
    type: 'course',
  },
  {
    id: '10',
    institution: 'Udemy',
    degree: 'GitHub Actions e CI/CD',
    type: 'course',
  },
]
