interface ProjectStatusBadgeProps {
  status?: string
  className?: string
}

export function ProjectStatusBadge({ status, className = '' }: ProjectStatusBadgeProps) {
  if (!status) return null

  const normalized = status.toLowerCase()

  let variantClass = 'project-status-badge--completed'
  if (normalized.includes('produção') || normalized.includes('producao') || normalized.includes('live')) {
    variantClass = 'project-status-badge--production'
  } else if (normalized.includes('desenvolvimento') || normalized.includes('andamento')) {
    variantClass = 'project-status-badge--development'
  }

  return (
    <span className={`project-status-badge ${variantClass}${className ? ` ${className}` : ''}`}>
      <span className="project-status-dot" aria-hidden="true" />
      {status}
    </span>
  )
}
