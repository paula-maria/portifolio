export interface EducationItem {
  id: string
  period: string
  institution: string
  degree: string
  description?: string
}

export const education: EducationItem[] = [
  {
    id: '1',
    period: '2023 — Atual',
    institution: 'UNIFAP — Universidade Federal do Amapá, Campus Macapá',
    degree: 'Graduação em Ciência da Computação',
  },
  {
    id: '2',
    period: '2019 — 2022',
    institution: 'IFAP — Instituto Federal do Amapá',
    degree: 'Ensino Médio Integrado Técnico em Redes de Computadores',
  },
]
