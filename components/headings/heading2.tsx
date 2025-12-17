import { cn } from '@/lib/utils'
import type { HeadingProps } from '.'

export default function Heading2({ children, className }: HeadingProps) {
  return <h2 className={cn('text-2xl/10 sm:text-3xl/12 tracking-wide text-brand-blue-700', className)}>{children}</h2>
}
