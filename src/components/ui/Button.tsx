import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  target,
  rel,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn('btn', `btn--${variant}`, `btn--${size}`, className)

  if (Tag === 'a') {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
