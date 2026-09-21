import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectTags } from './ProjectTags'
import { ProjectVideo } from './ProjectVideo'
import { ProjectStatusBadge } from './ProjectStatusBadge'
import type { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  index: number
  variant?: 'featured' | 'other'
}

export function ProjectCard({ project, index, variant = 'featured' }: ProjectCardProps) {
  const coverMediaSrc = project.coverImage || project.images[0]?.src

  if (variant === 'other') {
    return (
      <article className="other-project-card" data-animate style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}>
        <div className="other-project-card__media">
          {project.video ? (
            <ProjectVideo src={project.video} title={project.title} />
          ) : coverMediaSrc ? (
            <img
              src={coverMediaSrc}
              alt={project.title}
              className="other-project-card__cover"
              loading="lazy"
            />
          ) : (
            <div className="project-media-placeholder" aria-hidden="true" />
          )}
        </div>
        <div className="other-project-card__body">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <h3 className="other-project-card__title" style={{ margin: 0 }}>{project.title}</h3>
            <ProjectStatusBadge status={project.status} />
          </div>
          <p className="other-project-card__desc">{project.tagline}</p>
          <ProjectTags tags={project.tags} className="mb-3" />
          <Link to={`/projeto/${project.slug}`} className="project-link">
            Ver projeto <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article
      className="featured-project-card"
      data-animate
      style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}
    >
      <div className="featured-project-card__header">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span className="featured-project-card__index">0{index + 1}</span>
          <ProjectStatusBadge status={project.status} />
        </div>
        <h3 className="featured-project-card__title">{project.title}</h3>
        <p className="featured-project-card__desc">{project.tagline}</p>
        <ProjectTags tags={project.tags} className="mb-4" />
        <Link to={`/projeto/${project.slug}`} className="project-link">
          Ver projeto <ArrowRight size={14} />
        </Link>
      </div>
      <div className="featured-project-card__media">
        {project.video ? (
          <ProjectVideo src={project.video} title={project.title} />
        ) : coverMediaSrc ? (
          <img
            src={coverMediaSrc}
            alt={project.title}
            className="featured-project-card__cover"
            loading="lazy"
          />
        ) : (
          <div className="project-media-placeholder" aria-hidden="true" />
        )}
      </div>
    </article>
  )
}
