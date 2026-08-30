import { Github, Linkedin, Mail } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { IconButton } from '@/components/ui/IconButton'
import { socialLinks } from '@/data/social'

const ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
}

export function Contact() {
  return (
    <section id="contato" className="section">
      <div className="contact-layout">
        <div className="contact-copy" data-animate>
          <SectionTitle className="text-left mb-4">VAMOS CONVERSAR?</SectionTitle>
          <p>
            Estou aberta a novas oportunidades e projetos que gerem impacto positivo.
          </p>
          <Button
            variant="primary"
            size="lg"
            as="a"
            href="mailto:paulamaria.loc@gmail.com"
          >
            <Mail size={16} />
            Enviar e-mail
          </Button>
        </div>

        <div className="contact-social" data-animate style={{ '--delay': '120ms' } as React.CSSProperties}>
          <p className="contact-social__label">REDES SOCIAIS</p>
          <div className="contact-social__links">
            {socialLinks.map((link) => {
              const Icon = ICON_MAP[link.icon]
              return (
                <IconButton key={link.id} href={link.href} label={link.label}>
                  <Icon size={18} />
                </IconButton>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
