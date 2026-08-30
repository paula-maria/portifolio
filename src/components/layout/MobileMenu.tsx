import { X, Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks } from '@/data/social'

const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Contato', href: '#contato' },
]

const ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
}

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  function handleNavClick(href: string) {
    onClose()
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <div className="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="Menu de navegação">
      <div className="mobile-menu-panel">
        {/* Header */}
        <div className="mobile-menu-header">
          <span className="brand-mono">PAULA MARIA</span>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="mobile-menu-close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="mobile-menu-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="mobile-menu-link"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social links */}
        <div className="mobile-menu-social">
          {socialLinks.map((link) => {
            const Icon = ICON_MAP[link.icon]
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.icon !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="mobile-menu-social-link"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
