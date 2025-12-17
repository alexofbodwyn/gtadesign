import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Heading1 } from '@/components/headings'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="max-w-site w-full mx-auto border-b border-zinc-300 pb-8 px-4">
      <div className="flex mt-8 gap-4">
        <Button asChild>
          <Link href="/get-in-touch">
            Lets Talk About Your Project <ArrowRightIcon className="text-brand-green-400" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">See How I Can Help</Link>
        </Button>
      </div>
      <Heading1>
        Not sure where to start with your brand?
        <br />
        <strong className="font-semibold">Let me help.</strong>
      </Heading1>
      <p className="max-w-[780px] mt-8 text-lg text-brand-blue-100">
        With 25 years of global design experience, I specialise in helping local SMEs bring their brand vision to life.
        <strong className="font-semibold">
          From your first logo to a complete digital presence - everything you need, all in one place for Brand, Print,
          Web, and UX design.
        </strong>
      </p>
    </div>
  )
}
