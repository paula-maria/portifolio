import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('w-full max-w-[860px] mx-auto px-4 md:px-6', className)}>
      {children}
    </Tag>
  )
}
