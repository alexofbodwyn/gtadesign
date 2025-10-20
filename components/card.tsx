import { cn } from '@/lib/utils'

export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-4 rounded-lg border border-zinc-300 bg-white', className)}>{children}</div>
}
