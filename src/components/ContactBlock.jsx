import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import SectionTitle from './SectionTitle'

export default function ContactBlock() {
  return (
    <section className="footer-contact" id="contato" data-reveal>
      <SectionTitle>Contato</SectionTitle>
      <div className="contact-layout">
        <div className="contact-copy" data-reveal style={{ '--reveal-delay': '110ms' }}>
          <p>
            Aberta a oportunidades profissionais, colaborações técnicas e projetos que
            demandem soluções frontend modernas e integração com IA. Entre em contato
            diretamente - sem formulários.
          </p>
          <div className="contact-list">
            <a href="mailto:paulamaria.loc@gmail.com">
              <span className="contact-icon"><Mail size={15} /></span>
              paulamaria.loc@gmail.com
            </a>
            <a href="tel:+5596981241822">
              <span className="contact-icon"><Phone size={15} /></span>
              (96) 98124-1822
            </a>
            <span>
              <span className="contact-icon muted"><MapPin size={15} /></span>
              Macapá, Amapá, Brasil
            </span>
          </div>
        </div>

        <div className="social-block" data-reveal style={{ '--reveal-delay': '180ms' }}>
          <p>Redes Profissionais</p>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <span className="contact-icon"><Github size={15} /></span>
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <span className="contact-icon"><Linkedin size={15} /></span>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
