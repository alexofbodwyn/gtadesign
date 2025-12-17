import { cn } from '@/lib/utils'
import type { HeadingProps } from '.'

export default function Heading3({ children, className }: HeadingProps) {
  return (
    <h3 className={cn('text-xl/8 sm:text-2xl/12 tracking-wide text-brand-blue-700 font-semibold', className)}>
      {children}
    </h3>
  )
}
