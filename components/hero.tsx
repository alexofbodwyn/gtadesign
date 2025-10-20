import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="max-w-site w-full mx-auto border-b border-zinc-300 pb-8">
      <Badge>Your Local Brand Partner</Badge>
      <h1 className="text-4xl text-zinc-700 mt-6">Not sure where to start with your brand? Let me help.</h1>
      <p className="max-w-[650px] mt-8 text-lg text-zinc-500">
        With 25 years of global design experience, I specialise in helping local SMEs bring their brand vision to life.
        From your first logo to a complete digital presence - everything you need, all in one place for Brand, Print,
        Web, and UX design.
      </p>
      <div className="flex mt-8 gap-4">
        <Button asChild>
          <Link href="/">
            Lets Talk About Your Project <ArrowRightIcon />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">See How I Can Help</Link>
        </Button>
      </div>
    </div>
  )
}
