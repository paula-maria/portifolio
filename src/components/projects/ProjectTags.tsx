import { cn } from '@/lib/utils'

interface ProjectTagsProps {
  tags: string[]
  className?: string
}

export function ProjectTags({ tags, className }: ProjectTagsProps) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)} aria-label="Tecnologias utilizadas">
      {tags.map((tag) => (
        <li key={tag} className="project-tag">
          {tag}
        </li>
      ))}
    </ul>
  )
}
