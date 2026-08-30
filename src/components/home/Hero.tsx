import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ProjectVideo } from '@/components/projects/ProjectVideo'
import { featuredProjects } from '@/data/projects'

const STATS = [
  { value: '+', label: 'Projetos reais' },
  { value: '+', label: 'Sistemas desenvolvidos' },
  { value: '+', label: 'Contextos governamentais' },
  { value: '+', label: 'Soluções orientadas a dados' },
] as const

export function Hero() {
  function scrollToProjects() {
    document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToExperience() {
    document.querySelector('#experiencia')?.scrollIntoView({ behavior: 'smooth' })
  }

  const heroVideo = featuredProjects[0]?.video

  return (
    <section id="top" className="hero-section">
      {/* Left column — copy */}
      <div className="hero-content">
        <p className="hero-eyebrow" data-animate>
          DESENVOLVEDORA BACKEND &amp; FULL STACK
        </p>

        <h1
          className="hero-headline"
          data-animate
          style={{ '--delay': '80ms' } as React.CSSProperties}
        >
          Engenharia de software aplicada
          <span className="hero-headline--accent"> a problemas reais.</span>
        </h1>

        <p
          className="hero-body"
          data-animate
          style={{ '--delay': '160ms' } as React.CSSProperties}
        >
          Desenvolvo sistemas, aplicações web e soluções orientadas a dados,
          atuando desde a compreensão do problema até a implementação da solução.
        </p>

        <div
          className="hero-ctas"
          data-animate
          style={{ '--delay': '240ms' } as React.CSSProperties}
        >
          <Button variant="primary" size="lg" as="button" onClick={scrollToProjects}>
            Ver projetos
          </Button>
          <Button variant="outline" size="lg" as="button" onClick={scrollToExperience}>
            Conhecer minha experiência
          </Button>
        </div>
      </div>

      {/* Right column — video */}
      <div
        className="hero-media"
        data-animate
        style={{ '--delay': '120ms' } as React.CSSProperties}
      >
        {heroVideo ? (
          <ProjectVideo src={heroVideo} title="Demonstração de projeto" />
        ) : (
          <div className="hero-media-placeholder" aria-hidden="true" />
        )}
      </div>

      {/* Scroll hint */}
      <button
        className="hero-scroll-hint"
        onClick={scrollToProjects}
        aria-label="Rolar para projetos"
        data-animate
        style={{ '--delay': '400ms' } as React.CSSProperties}
      >
        <ArrowDown size={16} />
        <span>scroll</span>
      </button>

      {/* Stats bar — full width row below the two columns */}
      <div
        className="hero-stats"
        data-animate
        style={{ '--delay': '320ms' } as React.CSSProperties}
        aria-label="Números em evidência"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <span className="hero-stat__value">{stat.value}</span>
            <span className="hero-stat__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
