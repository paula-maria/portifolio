import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { socialLinks } from '@/data/social'

const ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
}

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div className="footer-left">
          <p className="footer-name">Paula Maria Costa</p>
          <p className="footer-role">Desenvolvedora Backend &amp; Full Stack</p>
        </div>

        <div className="footer-social">
          {socialLinks.map((link) => {
            const Icon = ICON_MAP[link.icon]
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.icon !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="footer-social-link"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>

        <div className="footer-right">
          <p className="footer-copy">© 2026 Paula Maria Costa. Todos os direitos reservados.</p>
          <button onClick={scrollToTop} aria-label="Voltar ao topo" className="footer-top-btn">
            <ArrowUp size={14} />
          </button>
        </div>
      </Container>
    </footer>
  )
}
