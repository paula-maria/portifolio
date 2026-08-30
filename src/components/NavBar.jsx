import { navItems } from '../data/portfolio'

function toSectionId(item) {
  return item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function NavBar() {
  return (
    <nav className="topbar" aria-label="Navegação principal">
      <a className="brand" href="#top">Paula Costa</a>
      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item} href={`#${toSectionId(item)}`}>
            {item}
          </a>
        ))}
      </div>
      <a className="nav-button" href="#contato">Contato</a>
    </nav>
  )
}
