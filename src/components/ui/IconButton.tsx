import { cn } from '@/lib/utils'

interface IconButtonProps {
  href: string
  label: string
  target?: string
  rel?: string
  className?: string
  children: React.ReactNode
}

export function IconButton({
  href,
  label,
  target = '_blank',
  rel = 'noopener noreferrer',
  className,
  children,
}: IconButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 border border-border text-slate',
        'hover:border-navy hover:text-navy transition-colors duration-150',
        className
      )}
    >
      {children}
    </a>
  )
}
