import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag
      className={className}
      style={{
        width: '100%',
        maxWidth: '1440px',
        marginInline: 'auto',
        paddingInline: 'clamp(24px, 5vw, 48px)',
      }}
    >
      {children}
    </Tag>
  )
}
