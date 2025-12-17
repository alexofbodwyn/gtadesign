import { cn } from '@/lib/utils'
import type { HeadingProps } from '.'

export default function Heading4({ children, className }: HeadingProps) {
  return <h4 className={cn('text-xl tracking-wide text-brand-blue-700 font-semibold', className)}>{children}</h4>
}
