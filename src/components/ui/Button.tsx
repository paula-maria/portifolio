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
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 cursor-pointer select-none'

  const variants = {
    primary: 'bg-navy text-white hover:bg-navy-dark',
    outline: 'border border-navy text-navy hover:bg-navy hover:text-white',
    ghost: 'text-slate hover:text-navy',
  }

  const sizes = {
    sm: 'h-8 px-4 text-xs',
    md: 'h-10 px-5 text-sm',
    lg: 'h-11 px-6 text-sm',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

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
