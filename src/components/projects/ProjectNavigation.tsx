import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/types/project'

interface ProjectNavigationProps {
  prev: Project | undefined
  next: Project | undefined
}

export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  return (
    <nav className="project-navigation" aria-label="Navegação entre projetos">
      <div className="project-nav-side">
        {prev && (
          <Link to={`/projeto/${prev.slug}`} className="project-nav-link project-nav-link--prev">
            <ArrowLeft size={16} />
            <span>
              <span className="project-nav-label">Anterior</span>
              <span className="project-nav-title">{prev.title}</span>
            </span>
          </Link>
        )}
      </div>
      <div className="project-nav-side project-nav-side--right">
        {next && (
          <Link to={`/projeto/${next.slug}`} className="project-nav-link project-nav-link--next">
            <span>
              <span className="project-nav-label">Próximo</span>
              <span className="project-nav-title">{next.title}</span>
            </span>
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </nav>
  )
}
