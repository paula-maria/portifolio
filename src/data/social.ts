export interface SocialLink {
  id: string
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email'
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/paulamariac',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/paula-mariac',
    icon: 'linkedin',
  },
  {
    id: 'email',
    label: 'paulamaria.loc@gmail.com',
    href: 'mailto:paulamaria.loc@gmail.com',
    icon: 'email',
  },
]
