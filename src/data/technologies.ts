export interface TechItem {
  name: string
  category: 'frontend' | 'backend' | 'data' | 'infra'
}

export const technologies: TechItem[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3 / Tailwind', category: 'frontend' },
  { name: 'PHP / Laravel', category: 'backend' },
  { name: 'Python / FastAPI', category: 'backend' },
  { name: 'APIs REST', category: 'backend' },
  { name: 'PostgreSQL', category: 'data' },
  { name: 'Streamlit', category: 'data' },
  { name: 'Pandas / NumPy', category: 'data' },
  { name: 'Docker', category: 'infra' },
  { name: 'Git / GitHub', category: 'infra' },
  { name: 'Linux', category: 'infra' },
  { name: 'LLM APIs', category: 'infra' },
]
