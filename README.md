# Portfólio — Paula Maria

Portfólio pessoal desenvolvido com React, TypeScript e Vite. Apresenta projetos, experiência profissional e tecnologias, com navegação por rota para páginas de case study individuais.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 18 |
| Linguagem | TypeScript |
| Build | Vite 6 |
| Roteamento | React Router DOM v6 |
| Estilização | CSS puro com custom properties |
| Ícones | Lucide React |
| Utilitários | clsx + tailwind-merge (`cn`) |

---

## Estrutura de Diretórios

```
src/
├── App.tsx                    # Roteamento raiz e layout shell
├── main.tsx                   # Entry point — monta BrowserRouter
├── index.css                  # Design system completo via CSS custom properties
│
├── pages/
│   ├── Home/
│   │   └── Home.tsx           # Página principal — compõe todas as seções
│   └── Project/
│       └── Project.tsx        # Página de case study individual (/projeto/:slug)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Navbar fixo; troca links pelo botão voltar em páginas de projeto
│   │   ├── Footer.tsx         # Rodapé com links sociais
│   │   └── MobileMenu.tsx     # Overlay de navegação mobile
│   │
│   ├── home/
│   │   ├── Hero.tsx           # Seção inicial com headline, vídeo e stats
│   │   ├── FeaturedProjects.tsx  # Grid de projetos em destaque
│   │   ├── OtherProjects.tsx  # Grid de outros projetos
│   │   ├── Process.tsx        # Como eu desenvolvo — 5 etapas em grid
│   │   ├── About.tsx          # Sobre mim
│   │   ├── Experience.tsx     # Timeline de experiência profissional
│   │   ├── Technologies.tsx   # Grid de tecnologias por categoria
│   │   └── Contact.tsx        # Seção de contato
│   │
│   ├── projects/
│   │   ├── ProjectCard.tsx    # Card de projeto (variantes: featured / other)
│   │   ├── ProjectVideo.tsx   # Player de vídeo com autoplay por hover
│   │   ├── ProjectGallery.tsx # Galeria com lightbox
│   │   ├── ProjectNavigation.tsx  # Navegação prev/next entre projetos
│   │   └── ProjectTags.tsx    # Lista de tags de tecnologia
│   │
│   └── ui/
│       ├── Button.tsx         # Botão com variantes: primary, outline, ghost
│       ├── Container.tsx      # Wrapper de largura máxima com padding responsivo
│       ├── SectionTitle.tsx   # Título de seção com label mono + subtitle
│       └── IconButton.tsx     # Botão apenas com ícone
│
├── data/
│   ├── projects.ts            # Array de projetos com helpers: getProjectBySlug, getAdjacentProjects
│   ├── experience.ts          # Array de experiências profissionais
│   ├── technologies.ts        # Grupos de tecnologias por categoria
│   └── social.ts              # Links de redes sociais
│
├── hooks/
│   ├── useScrollAnimation.ts  # IntersectionObserver para [data-animate]
│   ├── useVideoAutoplay.ts    # Autoplay de vídeo por hover/visibilidade
│   └── useRevealOnScroll.js   # Hook legado de reveal (substituído pelo useScrollAnimation)
│
├── types/
│   └── project.ts             # Interface Project, ProjectImage, EngineeringStep
│
└── lib/
    └── utils.ts               # cn() — merge de classes com clsx + tailwind-merge
```

---

## Rotas

| Rota | Página | Descrição |
|---|---|---|
| `/` | `Home` | Página principal com todas as seções |
| `/projeto/:slug` | `Project` | Case study individual do projeto |
| `*` | `Home` | Fallback — qualquer rota não mapeada vai para a Home |

---

## Design System

Todo o estilo está centralizado em `src/index.css` via CSS custom properties. Não há framework de CSS — o design é implementado diretamente com classes semânticas.

### Custom Properties principais

```css
--font-sans:       'Inter'
--font-mono:       'JetBrains Mono'

--color-navy:      #173f92   /* cor de destaque principal */
--color-navy-dark: #0f2d6e
--color-ink:       #0d1421   /* texto principal */
--color-ink-soft:  #1e2d42
--color-slate:     #4f6278   /* texto secundário */
--color-slate-light: #8698af
--color-bg:        #f5f6fa   /* fundo */
--color-surface:   #ffffff
--color-border:    #d6dce8
```

### Animação de scroll

Qualquer elemento com `data-animate` inicia invisível (`opacity: 0, translateY(20px)`) e anima para visível ao entrar na viewport, via `IntersectionObserver` no hook `useScrollAnimation`. O delay é controlado por `style={{ '--delay': '80ms' }}`.

---

## Dados

Os projetos, experiências e tecnologias são definidos como arrays TypeScript em `src/data/`. Não há API nem CMS — o conteúdo é estático e compilado junto com o bundle.

### Adicionar um projeto

1. Adicionar o objeto no array `projects` em `src/data/projects.ts` seguindo a interface `Project`
2. Para aparecer nos cards da home: `featured: true`
3. Mídias em `public/videos/` e `public/images/projects/<slug>/`

### Interface Project

```ts
interface Project {
  id: string
  slug: string           // usado como parâmetro de rota
  title: string
  subtitle?: string
  tagline: string
  context: string
  problem: string
  contribution: string
  technicalDecisions: string
  results: string[]
  engineeringSteps: EngineeringStep[]
  tags: string[]
  video?: string         // caminho relativo a /public
  coverImage?: string    // imagem de capa para o card (fallback do vídeo)
  images: ProjectImage[]
  siteUrl?: string
  repoUrl?: string
  featured: boolean
  category: 'web' | 'system' | 'data' | 'ml'
}
```

---

## Rodando localmente

```bash
npm install
npm run dev
```

### Build de produção

```bash
npm run build
npm run preview
```

### Outros scripts

```bash
npm run lint         # ESLint
npm run lint:fix     # ESLint com correção automática
```

---

## Assets estáticos

Ficam em `public/` e são referenciados por caminho absoluto:

```
public/
├── favicon.svg
├── videos/
│   └── egd-ap.mp4
└── images/
    └── projects/
        └── <slug>/
            ├── 1.png
            └── ...
```
