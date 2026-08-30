import { cn } from '@/lib/utils'

interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
  className?: string
}

export function SectionTitle({ children, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('mb-10 text-center', className)}>
      <h2 className="section-title-text">{children}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
