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
    coverImage: '/images/projects/amapa-jovem/1.png',
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
    slug: 'senha-lettuce',
    title: 'Sistema de Senhas',
    subtitle: 'RESTAURANTE LETTUCE',
    tagline: 'Sistema de gestão de pedidos com painel de senhas em tempo real para restaurante.',
    context:
      'Freelance desenvolvido para o Restaurante Lettuce, que precisava de um sistema digital para substituir o controle manual de pedidos. O restaurante opera com fluxo intenso de atendimento e necessitava de uma solução que conectasse a cozinha ao painel de chamada de senhas sem atritos.',
    problem:
      'O controle de pedidos era feito manualmente, o que gerava erros na ordem de preparo, falta de visibilidade do status para a equipe e ausência de um painel de chamada de senhas para os clientes. Era necessário um sistema em tempo real, sem necessidade de atualização manual.',
    contribution:
      'Desenvolvi o sistema completo de ponta a ponta: modelagem do banco de dados, API REST com FastAPI, WebSocket para comunicação em tempo real, painel da cozinha para gestão de pedidos e painel TV para exibição das senhas.',
    technicalDecisions:
      'Escolhi FastAPI pela performance e pelo suporte nativo a WebSockets, eliminando a necessidade de um servidor adicional para comunicação em tempo real. O SQLAlchemy 2.0 com Alembic garantiu controle de migrações sem intervenção manual no banco. No frontend, React com Axios e um listener de WebSocket simples permitiu atualizações automáticas no painel TV sem polling.',
    results: [
      'Painel de cozinha com gestão completa de status dos pedidos',
      'Painel TV atualizado em tempo real via WebSocket',
      'Geração automática de senhas sequenciais (A001 → A999 → B001...)',
      'Sistema em produção no restaurante',
    ],
    engineeringSteps: [
      { label: 'Levantamento de requisitos com o cliente' },
      { label: 'Modelagem do banco de dados' },
      { label: 'API REST + WebSocket (FastAPI)' },
      { label: 'Painel da cozinha (React)' },
      { label: 'Painel TV com atualização automática' },
      { label: 'Deploy e entrega' },
    ],
    tags: ['FastAPI', 'React', 'PostgreSQL', 'WebSocket', 'SQLAlchemy'],
    video: undefined,
    images: [
      { src: '/images/projects/senha-lettuce/1.png', alt: 'Painel da cozinha' },
      { src: '/images/projects/senha-lettuce/2.png', alt: 'Painel TV de senhas' },
    ],
    siteUrl: undefined,
    repoUrl: undefined,
    featured: false,
    category: 'system',
  },
  {
    id: '4',
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
    id: '5',
    slug: 'orbita',
    title: 'Órbita',
    subtitle: 'GESTÃO INTERNA DE TI',
    tagline: 'Sistema Multi-Tenant para gestão de demandas, projetos e equipes em ambiente governamental.',
    context:
      'Sistema interno desenvolvido para uma equipe de TI de órgão governamental com múltiplas diretorias independentes (DIC, RH, Financeiro, DSTD). A arquitetura precisava garantir isolamento total de dados entre diretorias enquanto permitia colaboração controlada em projetos compartilhados.',
    problem:
      'A gestão das demandas era feita via e-mail e planilhas, causando perda de informações, falta de rastreabilidade e dificuldade no acompanhamento de prazos. Com múltiplas diretorias no mesmo ambiente, havia risco de vazamento de dados entre departamentos e ausência de controle de acesso granular por papel e diretoria.',
    contribution:
      'Desenvolvi o sistema fullstack com Laravel, incluindo modelagem do banco de dados, arquitetura Multi-Tenant com isolamento lógico por team_id, sistema de permissões hierárquico (MasterAdmin, Scoped Admin, Diretor, Analista, Solicitante), Kanban de tarefas, monitor de sistemas e log de atividades. Realizei também o deploy em produção com Docker e Portainer, com stack Nginx + PHP-FPM + PostgreSQL containerizada.',
    technicalDecisions:
      'A arquitetura Multi-Tenant usa isolamento lógico via team_id em vez de bancos separados, reduzindo custo operacional sem abrir mão da segurança. As Policies do Laravel avaliam dinamicamente o papel do usuário junto à sua diretoria — nunca o papel isolado — garantindo que um admin de uma diretoria não acesse dados de outra. O modelo de colaboração entre times é granular: a diretoria dona de um projeto pode convidar membros individuais, núcleos inteiros ou outras diretorias como colaboradoras, observadoras ou administradoras do projeto — cada nível com permissões distintas de edição, movimentação no Kanban e exclusão. O deploy com Portainer permitiu gerenciar os containers via interface web sem acesso direto ao servidor.',
    results: [
      'Isolamento total de dados entre diretorias com arquitetura Multi-Tenant',
      'Colaboração cross-team granular: observador, comentador ou admin por projeto',
      'Sistema de permissões hierárquico com 5 perfis de acesso',
      'Kanban de tarefas com arrastar e soltar por projeto',
      'Monitor de sistemas e log de atividades auditável',
      'Deploy containerizado com Docker + Portainer em produção',
    ],
    engineeringSteps: [
      { label: 'Levantamento de requisitos' },
      { label: 'Modelagem Multi-Tenant' },
      { label: 'Autenticação e Policies' },
      { label: 'Desenvolvimento das funcionalidades' },
      { label: 'Containerização Docker' },
      { label: 'Deploy com Portainer' },
    ],
    tags: ['Laravel', 'PHP', 'PostgreSQL', 'Docker', 'Portainer', 'Multi-Tenant'],
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
    id: '6',
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
    id: '7',
    slug: 'qsar',
    title: 'QSAR Ecotoxicidade',
    subtitle: 'ATIVOS AMAZÔNICOS',
    tagline: 'Pipeline em Python para prever a ecotoxicidade de ativos cosméticos amazônicos usando modelos QSAR baseados em descritores moleculares.',
    context:
      'O projeto integra duas bases públicas de ecotoxicidade — ECOTOX (US-EPA) e EnviroTox — totalizando ~2.140 compostos únicos após deduplicação por número CAS. O objetivo é predizer a inibição do crescimento de algas (pEC50) para ingredientes cosméticos amazônicos, conectando estrutura química a efeito biológico.',
    problem:
      'A avaliação experimental de ecotoxicidade é cara, demorada e depende de ensaios laboratoriais para cada composto. Ingredientes amazônicos pouco estudados não possuem dados públicos suficientes, tornando inviável a avaliação individual. Era necessário um modelo preditivo capaz de estimar o risco ecotoxicológico a partir apenas da estrutura molecular.',
    contribution:
      'Construí o pipeline completo: coleta e fusão das bases ECOTOX e EnviroTox com controle de qualidade inter-fontes, geração de descritores moleculares com RDKit, controle taxonômico via one-hot encoding de espécies, treinamento com Random Forest otimizado por GridSearchCV e interface web em Streamlit com geração de relatórios em PDF.',
    technicalDecisions:
      'Random Forest foi escolhido pela robustez a ruídos experimentais, capacidade de capturar não-linearidades entre descritores químicos e efeito biológico, e resistência à multicolinearidade por seleção aleatória de atributos em cada nó. O controle taxonômico com one-hot encoding de latin_name isolou a sensibilidade de cada espécie de alga, elevando o R² de 0,41 para 0,45. A validação seguiu protocolos OECD: Y-Scrambling (R² cai de 0,45 para -0,12), domínio de aplicabilidade via h-Matrix e matriz de confusão por categorias GHS.',
    results: [
      'Base combinada com 2.140 compostos únicos (ECOTOX + EnviroTox)',
      'R² de 0,4544 com validação cruzada 5-fold',
      'Y-Scrambling com R² médio de -0,123, confirmando sinal químico real',
      'Descritores moleculares calculados via RDKit a partir de SMILES',
      'Interface Streamlit com relatórios preditivos exportáveis em PDF',
      'Pipeline modular e reprodutível com cache de consultas PubChem',
    ],
    engineeringSteps: [
      { label: 'Coleta e fusão ECOTOX + EnviroTox' },
      { label: 'Deduplicação por CAS e controle inter-fontes' },
      { label: 'Descritores moleculares via RDKit' },
      { label: 'Controle taxonômico (one-hot de espécies)' },
      { label: 'Treinamento Random Forest + GridSearchCV' },
      { label: 'Validação OECD (Y-Scrambling, Leverage, GHS)' },
    ],
    tags: ['Python', 'RDKit', 'Scikit-learn', 'Streamlit', 'Random Forest', 'Machine Learning'],
    video: undefined,
    images: [
      { src: '/images/projects/qsar/residuos.png', alt: 'Análise de Resíduos: Toxicidade Observada vs. Prevista (pEC50)' },
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
