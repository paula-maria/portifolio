export interface ProjectImage {
  src: string
  alt: string
}

export interface EngineeringStep {
  label: string
}

export interface Project {
  id: string
  slug: string
  title: string
  subtitle?: string          // e.g. "GOVERNO DO ESTADO DO AMAPÁ"
  tagline: string
  context: string            // Contexto institucional / origem do projeto
  problem: string            // Qual era o problema a resolver
  contribution: string       // Minha atuação específica
  technicalDecisions: string // Decisões de desenvolvimento / arquitetura
  results: string[]
  engineeringSteps: EngineeringStep[]  // Etapas reais do trabalho
  tags: string[]
  video?: string
  images: ProjectImage[]
  siteUrl?: string
  repoUrl?: string
  featured: boolean
  category: 'web' | 'system' | 'data' | 'ml'
}
