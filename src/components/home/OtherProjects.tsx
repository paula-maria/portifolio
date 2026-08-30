import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { otherProjects } from '@/data/projects'

export function OtherProjects() {
  return (
    <section className="section">
      <SectionTitle subtitle="Soluções desenvolvidas em diferentes contextos e tecnologias.">
        OUTROS PROJETOS
      </SectionTitle>
      <div className="other-projects-grid">
        {otherProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} variant="other" />
        ))}
      </div>
    </section>
  )
}
