import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'amapa-jovem',
    title: 'Amapá Jovem',
    tagline: 'Plataforma de inscrição e gerenciamento de candidatos para o programa Amapá Jovem.',
    context:
      'Projeto desenvolvido para o programa Amapá Jovem, iniciativa do Governo do Estado do Amapá voltada à inclusão social de jovens. A aplicação precisava suportar o fluxo completo de inscrições e a gestão dos candidatos por servidores públicos.',
    problem:
      'A plataforma precisava ser intuitiva para os candidatos, garantindo que o processo de inscrição fosse simples e eficiente. Além disso, o painel administrativo deveria permitir aos servidores públicos gerenciar os candidatos inscritos de forma organizada e segura.',
    contribution:
      'Atuei no desenvolvimento da interface web, implementando componentes de formulário, validações, fluxo de inscrição e integração com a API. Trabalhei também no painel administrativo para gestão dos candidatos inscritos, contribuindo para a experiência do servidor público.',
    technicalDecisions:
      'Optamos por React com componentização granular para reaproveitamento entre o fluxo do candidato e o painel administrativo. A integração com a API seguiu contratos definidos em conjunto com o backend. Priorizamos validação no frontend para reduzir erros antes do envio.',
    results: [
      'Processo de inscrição 100% online',
      'Redução significativa no tempo de análise dos candidatos',
      'Melhor experiência tanto para o candidato quanto para o gestor',
    ],
    engineeringSteps: [
      { label: 'Requisitos' },
      { label: 'Interface e fluxo de usuário' },
      { label: 'Componentização' },
      { label: 'Integração com API' },
      { label: 'Validação e testes' },
      { label: 'Entrega' },
    ],
    tags: ['PHP', 'Laravel', 'Blade', 'Tailwind CSS'],
    video: '/videos/amapa-jovem.mp4',
    images: [
      { src: '/images/projects/amapa-jovem/1.png', alt: 'Página inicial Amapá Jovem' },
      { src: '/images/projects/amapa-jovem/2.png', alt: 'Formulário de inscrição' },
      { src: '/images/projects/amapa-jovem/3.png', alt: 'Painel administrativo' },
    ],
    siteUrl: undefined,
    repoUrl: undefined,
    featured: true,
    category: 'web',
  },
  {
    id: '2',
    slug: 'estrategia-digital',
    title: 'Estratégia Digital',
    subtitle: 'GOVERNO DO ESTADO DO AMAPÁ',
    tagline: 'Plataforma para acompanhamento da Estratégia de Governo Digital (EGD) do Amapá.',
    context:
      'O Governo do Amapá precisava de um sistema transparente e acessível para exibir indicadores, metas e as evidências de implementação das ações estratégicas de acordo com o Índice de Oferta de Serviços Públicos Digitais (IOSPD).',
    problem:
      'Os dados de governo digital precisavam ser centralizados e disponibilizados de forma clara para acompanhamento. Era essencial que a atualização e adição de novas evidências e documentos (como PDFs e links) não dependesse de mudanças complexas no código-fonte.',
    contribution:
      'Atuei de ponta a ponta: conduzi as entrevistas e a elicitação de requisitos, estruturei a coleta e organização dos dados, desenvolvi o frontend e implementei a lógica complexa de exibição e cálculo dos indicadores.',
    technicalDecisions:
      'Utilizamos React 19, Vite e Tailwind CSS, juntamente com Radix UI para garantir a acessibilidade. A arquitetura de dados foi centralizada (ex: `evidencias.js`), permitindo atualizações simplificadas baseadas em configuração. O React Query auxiliou no controle de estado e cache de dados.',
    results: [
      'Transparência no acompanhamento das metas do IOSPD',
      'Painel de indicadores dinâmico e acessível',
      'Arquitetura de conteúdo que facilita atualizações por não-desenvolvedores',
    ],
    engineeringSteps: [
      { label: 'Elicitação de requisitos' },
      { label: 'Coleta e organização de dados' },
      { label: 'Arquitetura de estado e dados' },
      { label: 'Desenvolvimento Frontend (React 19)' },
      { label: 'Lógica de exibição de indicadores' },
      { label: 'Entrega' },
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Radix UI', 'React Query'],
    video: '/videos/egd-ap.mp4',
    images: [
      { src: '/images/projects/estrategia-digital/1.png', alt: 'Home Estratégia Digital' },
      { src: '/images/projects/estrategia-digital/2.png', alt: 'Seção de projetos' },
    ],
    siteUrl: 'https://governodigital.portal.ap.gov.br/',
    repoUrl: undefined,
    featured: true,
    category: 'web',
  },
  {
    id: '3',
    slug: 'studycourses',
    title: 'StudyCourses',
    tagline: 'Plataforma de estudos com cursos, trilhas e materiais.',
    context:
      'Plataforma educacional desenvolvida para centralizar cursos, trilhas de aprendizagem e materiais de estudo, com controle de progresso do aluno e uma API robusta para suportar a aplicação.',
    problem:
      'A ausência de uma estrutura centralizada dificultava o acompanhamento do progresso dos alunos e a organização dos conteúdos por trilhas. Era necessário uma API bem estruturada que suportasse diferentes tipos de conteúdo e o progresso individual de cada usuário.',
    contribution:
      'Fui responsável pela arquitetura e desenvolvimento do backend em FastAPI, incluindo modelagem do banco de dados, endpoints RESTful e documentação automática. Atuei também na integração com o frontend React.',
    technicalDecisions:
      'Escolhemos FastAPI pela performance e pela geração automática de documentação com OpenAPI. O banco de dados foi modelado em PostgreSQL com foco em escalabilidade. A separação entre rotas de aluno e de administrador seguiu princípios de separação de responsabilidades.',
    results: [
      'API robusta com documentação automática via OpenAPI',
      'Gestão de progresso por aluno e por trilha',
      'Plataforma escalável para crescimento do conteúdo',
    ],
    engineeringSteps: [
      { label: 'Requisitos' },
      { label: 'Modelagem de dados' },
      { label: 'Arquitetura da API' },
      { label: 'Implementação e testes' },
      { label: 'Integração frontend' },
      { label: 'Entrega' },
    ],
    tags: ['FastAPI', 'React', 'PostgreSQL'],
    video: '/videos/studycourses.mp4',
    images: [
      { src: '/images/projects/studycourses/1.png', alt: 'Dashboard StudyCourses' },
      { src: '/images/projects/studycourses/2.png', alt: 'Trilha de aprendizagem' },
    ],
    siteUrl: undefined,
    repoUrl: undefined,
    featured: false,
    category: 'web',
  },
  {
    id: '4',
    slug: 'orbita',
    title: 'Órbita',
    tagline: 'Sistema interno para gestão de demandas, tarefas e usuários.',
    context:
      'Sistema interno desenvolvido para uma equipe de TI de órgão governamental que precisava organizar demandas, atribuir responsáveis e acompanhar o andamento das tarefas de forma centralizada.',
    problem:
      'A gestão das demandas era feita via e-mail e planilhas, o que causava perda de informações, falta de rastreabilidade e dificuldade no acompanhamento de prazos. Era necessário um sistema que centralizasse e estruturasse esse fluxo.',
    contribution:
      'Desenvolvi o sistema fullstack com Laravel, incluindo modelagem do banco de dados, autenticação, controle de permissões por papel (admin, analista, solicitante) e containerização com Docker para facilitar o deploy.',
    technicalDecisions:
      'Laravel foi escolhido pela maturidade do framework e pela facilidade de implementação de autenticação e permissões. O Docker garantiu paridade entre ambientes de desenvolvimento e produção. O banco de dados foi modelado para suportar diferentes tipos de demanda com histórico de alterações.',
    results: [
      'Centralização de todas as demandas internas',
      'Rastreabilidade completa com histórico de alterações',
      'Deploy simplificado com Docker',
    ],
    engineeringSteps: [
      { label: 'Levantamento de requisitos' },
      { label: 'Modelagem do banco de dados' },
      { label: 'Autenticação e permissões' },
      { label: 'Desenvolvimento das funcionalidades' },
      { label: 'Containerização' },
      { label: 'Entrega' },
    ],
    tags: ['Laravel', 'PHP', 'Docker'],
    video: '/videos/orbita.mp4',
    images: [
      { src: '/images/projects/orbita/1.png', alt: 'Lista de demandas Órbita' },
      { src: '/images/projects/orbita/2.png', alt: 'Gestão de usuários' },
    ],
    siteUrl: undefined,
    repoUrl: undefined,
    featured: false,
    category: 'system',
  },
  {
    id: '5',
    slug: 'dashboards-judiciais',
    title: 'Dashboards Judiciais',
    tagline: 'Dashboards para análise de indicadores do TJAP.',
    context:
      'Projeto desenvolvido para o Tribunal de Justiça do Estado do Amapá (TJAP), com o objetivo de criar painéis analíticos para acompanhamento de indicadores processuais e apoio à gestão institucional.',
    problem:
      'Os dados processuais estavam dispersos e o acesso a indicadores dependia de relatórios gerados manualmente, consumindo tempo e sujeitos a erros. Era necessário automatizar a extração, transformação e visualização desses dados.',
    contribution:
      'Desenvolvi os dashboards com Python e Streamlit, conectados ao banco de dados PostgreSQL do tribunal. Implementei a lógica de transformação dos dados, os filtros interativos e a automação da geração de relatórios.',
    technicalDecisions:
      'Streamlit foi escolhido pela velocidade de desenvolvimento e por não exigir um frontend separado. O acesso ao banco foi feito de forma segura com credenciais controladas. As queries foram otimizadas para lidar com o volume de dados processuais.',
    results: [
      'Indicadores processuais acessíveis em tempo real',
      'Redução no tempo de geração de relatórios gerenciais',
      'Apoio direto à tomada de decisão institucional',
    ],
    engineeringSteps: [
      { label: 'Entendimento dos dados' },
      { label: 'Modelagem e queries' },
      { label: 'Transformação e limpeza' },
      { label: 'Visualização' },
      { label: 'Automação de relatórios' },
      { label: 'Entrega' },
    ],
    tags: ['Python', 'Streamlit', 'PostgreSQL'],
    video: undefined,
    images: [
      { src: '/images/projects/dashboards/1.png', alt: 'Dashboard indicadores TJAP' },
      { src: '/images/projects/dashboards/2.png', alt: 'Gráfico processual' },
    ],
    siteUrl: undefined,
    repoUrl: undefined,
    featured: false,
    category: 'data',
  },
  {
    id: '6',
    slug: 'qsar',
    title: 'QSAR',
    tagline: 'Modelo de Machine Learning aplicado à predição de propriedades químicas.',
    context:
      'Projeto de pesquisa acadêmica aplicando técnicas de QSAR (Quantitative Structure-Activity Relationship) para predição de atividade biológica de moléculas. Desenvolvido no contexto de pesquisa científica com dados reais de compostos químicos.',
    problem:
      'A avaliação experimental de atividade biológica de moléculas é cara e demorada. O objetivo era construir modelos preditivos capazes de estimar essa atividade a partir da estrutura química, reduzindo o número de experimentos necessários.',
    contribution:
      'Construí o pipeline completo de ML: coleta e limpeza dos dados, geração de descritores moleculares com RDKit, feature selection, treinamento e avaliação de modelos com Scikit-learn, e documentação dos experimentos.',
    technicalDecisions:
      'RDKit foi escolhido por ser a biblioteca padrão para quiminformática em Python. Testamos múltiplos algoritmos (Random Forest, SVM, Gradient Boosting) e selecionamos com base em métricas de validação cruzada. O pipeline foi estruturado de forma reprodutível usando scikit-learn Pipelines.',
    results: [
      'Modelos preditivos com performance acima da baseline',
      'Pipeline de ML reprodutível e documentado',
      'Contribuição para pesquisa de triagem virtual de compostos',
    ],
    engineeringSteps: [
      { label: 'Coleta e análise dos dados' },
      { label: 'Geração de descritores' },
      { label: 'Feature selection' },
      { label: 'Treinamento e validação' },
      { label: 'Avaliação de modelos' },
      { label: 'Documentação' },
    ],
    tags: ['Python', 'RDKit', 'Scikit-learn'],
    video: undefined,
    images: [
      { src: '/images/projects/qsar/1.png', alt: 'Pipeline QSAR' },
      { src: '/images/projects/qsar/2.png', alt: 'Resultados do modelo' },
    ],
    siteUrl: undefined,
    repoUrl: undefined,
    featured: false,
    category: 'ml',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): {
  prev: Project | undefined
  next: Project | undefined
} {
  const idx = projects.findIndex((p) => p.slug === slug)
  return {
    prev: idx > 0 ? projects[idx - 1] : undefined,
    next: idx < projects.length - 1 ? projects[idx + 1] : undefined,
  }
}
