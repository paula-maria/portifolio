import { Code2, Globe2, Mail, MapPin, Phone, Sparkles } from 'lucide-react'

export const navItems = ['Resumo', 'Experiência', 'Habilidades', 'Projetos', 'Contato']

export const contacts = [
  { icon: MapPin, text: 'Macapá, Amapá, Brasil' },
  { icon: Phone, text: '(96) 98124-1822', href: 'tel:+5596981241822' },
  { icon: Mail, text: 'paulamaria.loc@gmail.com', href: 'mailto:paulamaria.loc@gmail.com' },
  { icon: Globe2, text: 'Inglês Fluente · Espanhol Intermediário' },
]

export const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'PHP/Laravel',
  'APIs REST',
  'Docker',
  'Git',
  'Linux',
  'LLM APIs',
]

export const experience = [
  'Construção e manutenção de sistemas web com foco em desenvolvimento fullstack, principalmente frontend.',
  'Colaboração com equipe técnica para implementar soluções em fluxos de trabalho do setor público.',
  'Aplicação de práticas modernas de frontend: componentes, gerenciamento de estado e integração com APIs REST.',
  'Produção de documentação de requisitos para apoiar decisões de engenharia e alinhamento entre equipes.',
]

export const projects = [
  {
    title: 'Sistemas Web Institucionais',
    description: 'Interfaces responsivas, integrações com APIs e evolução de aplicações em ambiente público.',
    icon: Code2,
  },
  {
    title: 'Experimentos com IA',
    description: 'Prototipação de fluxos assistidos por LLMs para acelerar descoberta, escrita e implementação.',
    icon: Sparkles,
  },
]
