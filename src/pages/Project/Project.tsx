import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { ExternalLink, Github } from 'lucide-react'
import { getProjectBySlug, getAdjacentProjects } from '@/data/projects'
import { ProjectVideo } from '@/components/projects/ProjectVideo'
import { ProjectNavigation } from '@/components/projects/ProjectNavigation'
import { ProjectGallery } from '@/components/projects/ProjectGallery'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Project() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined
  const { prev, next } = slug
    ? getAdjacentProjects(slug)
    : { prev: undefined, next: undefined }

  useScrollAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="project-page">
      <Container>

        {/* ── Case header ───────────────────────────────────────── */}
        <header className="case-header" data-animate>
          <div className="case-header__meta">
            <span className="case-meta-tag">PROJETO REAL</span>
            {project.category === 'web'    && <span className="case-meta-tag">DESENVOLVIMENTO WEB</span>}
            {project.category === 'system' && <span className="case-meta-tag">SISTEMA INTERNO</span>}
            {project.category === 'data'   && <span className="case-meta-tag">ANÁLISE DE DADOS</span>}
            {project.category === 'ml'     && <span className="case-meta-tag">MACHINE LEARNING</span>}
          </div>

          <h1 className="case-header__title">{project.title.toUpperCase()}</h1>

          {project.subtitle && (
            <p className="case-header__subtitle">{project.subtitle}</p>
          )}

          <p className="case-header__tagline">{project.tagline}</p>

          <ul className="case-tags" aria-label="Tecnologias">
            {project.tags.map((tag) => (
              <li key={tag} className="case-tag">{tag}</li>
            ))}
          </ul>
        </header>

        {/* ── Engineering steps ────────────────────────────────── */}
        {project.engineeringSteps.length > 0 && (
          <div
            className="case-steps"
            data-animate
            style={{ '--delay': '100ms' } as React.CSSProperties}
            aria-label="Etapas de engenharia"
          >
            {project.engineeringSteps.map((step, i) => (
              <div key={i} className="case-step">
                <span className="case-step__label">{step.label}</span>
                {i < project.engineeringSteps.length - 1 && (
                  <span className="case-step__arrow" aria-hidden="true">↓</span>
                )}
              </div>
            ))}
          </div>
        )}

        <div className={`case-body-layout${!project.video ? ' case-body-layout--full' : ''}`}>
          <div className="case-main-content">
            {/* ── Content sections ─────────────────────────────────── */}
            <div className="case-sections">

          <section
            className="case-section"
            data-animate
            style={{ '--delay': '80ms' } as React.CSSProperties}
          >
            <h2 className="case-section__heading">CONTEXTO</h2>
            <div className="case-section__rule" aria-hidden="true" />
            <p className="case-section__body">{project.context}</p>
          </section>

          <section
            className="case-section"
            data-animate
            style={{ '--delay': '120ms' } as React.CSSProperties}
          >
            <h2 className="case-section__heading">PROBLEMA</h2>
            <div className="case-section__rule" aria-hidden="true" />
            <p className="case-section__body">{project.problem}</p>
          </section>

          <section
            className="case-section"
            data-animate
            style={{ '--delay': '160ms' } as React.CSSProperties}
          >
            <h2 className="case-section__heading">MINHA ATUAÇÃO</h2>
            <div className="case-section__rule" aria-hidden="true" />
            <p className="case-section__body">{project.contribution}</p>
          </section>

          <section
            className="case-section"
            data-animate
            style={{ '--delay': '200ms' } as React.CSSProperties}
          >
            <h2 className="case-section__heading">DECISÕES TÉCNICAS</h2>
            <div className="case-section__rule" aria-hidden="true" />
            <p className="case-section__body">{project.technicalDecisions}</p>
          </section>

          <section
            className="case-section"
            data-animate
            style={{ '--delay': '240ms' } as React.CSSProperties}
          >
            <h2 className="case-section__heading">RESULTADO</h2>
            <div className="case-section__rule" aria-hidden="true" />
            <ul className="case-results">
              {project.results.map((result, i) => (
                <li key={i} className="case-result">
                  <span className="case-result__check" aria-hidden="true">✓</span>
                  {result}
                </li>
              ))}
            </ul>
          </section>

        </div>
          </div>

          {project.video && (
          <aside className="case-sidebar">
              <div
                className="case-video"
                data-animate
                style={{ '--delay': '80ms' } as React.CSSProperties}
              >
                <ProjectVideo src={project.video} title={project.title} />
              </div>
          </aside>
          )}
        </div>

        {/* ── Gallery ──────────────────────────────────────────── */}
        {project.images.length > 0 && (
          <div
            className="case-gallery-section"
            data-animate
          >
            <h2 className="case-section__heading mb-4">IMAGENS</h2>
            <div className="case-section__rule mb-6" aria-hidden="true" />
            <ProjectGallery images={project.images} title={project.title} />
          </div>
        )}

        {/* ── CTAs ─────────────────────────────────────────────── */}
        {(project.siteUrl || project.repoUrl) && (
          <div className="case-ctas" data-animate>
            {project.siteUrl && (
              <Button
                variant="primary"
                as="a"
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={15} />
                Acessar site
              </Button>
            )}
            {project.repoUrl && (
              <Button
                variant="outline"
                as="a"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
                Repositório GitHub
              </Button>
            )}
          </div>
        )}

        {/* ── Navigation ───────────────────────────────────────── */}
        <ProjectNavigation prev={prev} next={next} />

      </Container>
    </main>
  )
}
