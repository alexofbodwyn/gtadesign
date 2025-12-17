import { cn } from '@/lib/utils'
import type { HeadingProps } from '.'

export default function Heading1({ children, className }: HeadingProps) {
  return (
    <h1 className={cn('text-3xl/10 sm:text-4xl/13 text-brand-blue-700 mt-6 tracking-wide', className)}>{children}</h1>
  )
}
