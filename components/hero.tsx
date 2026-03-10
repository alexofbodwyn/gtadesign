import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Heading1 } from '@/components/headings'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="bg-[#051317] w-full">
      <div className="bg-radial-[at_25%_65%]  from-[#066d8a] to-100% pt-24">
        <div className="max-w-site w-full mx-auto pb-10 px-4">
          <Heading1 className="text-white">
            Strategic UX, Brand & Website Design for
            <br />
            Growing Businesses
          </Heading1>
          <p className="max-w-[780px] text-lg text-white mt-8">
            Helping SMEs and organisations modernise their
            <br />
            brand, marketing, website & digital experience
          </p>
          <div className="mt-8">
            <Button asChild variant="brand">
              <Link href="/get-in-touch">
                Book a Consultation <ArrowRightIcon className="text-brand-blue-600" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
