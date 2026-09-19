import { useState, useEffect } from 'react'
import { Menu, ArrowLeft } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { MobileMenu } from './MobileMenu'
import { Container } from '@/components/ui/Container'

const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isProjectPage = location.pathname.startsWith('/projeto/')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function handleNavClick(href: string) {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <Container className="navbar-inner">
          {isProjectPage ? (
            /* Botão voltar no lugar do brand */
            <Link to="/" className="navbar-back">
              <ArrowLeft size={14} />
              Voltar ao início
            </Link>
          ) : (
            /* Brand — só na home */
            <a href="#top" className="brand-mono" aria-label="Paula Maria — topo">
              PAULA MARIA
            </a>
          )}

          {isProjectPage ? null : (
            <>
              {/* Desktop nav */}
              <nav className="navbar-links" aria-label="Navegação principal">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="navbar-link"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Mobile hamburger */}
              <button
                className="navbar-hamburger"
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menu"
                aria-expanded={menuOpen}
              >
                <Menu size={20} />
              </button>
            </>
          )}
        </Container>
      </header>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  )
}
