import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { featuredProjects } from '@/data/projects'

export function FeaturedProjects() {
  return (
    <section id="projetos" className="section">
      <SectionTitle subtitle="Alguns projetos que mostram meu trabalho na prática.">
        PROJETOS EM DESTAQUE
      </SectionTitle>
      <div className="featured-projects-grid">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} variant="featured" />
        ))}
      </div>
    </section>
  )
}
