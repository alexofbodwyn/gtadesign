import Link from 'next/link'
import { Heading2 } from '@/components/headings'
import { Button } from '@/components/ui'

export default function GetInTouch() {
  return (
    <div className="bg-white w-full my-10 px-4">
      <div className="p-8 max-w-site w-full flex flex-col gap-8 m-auto bg-brand-teal-100 rounded-xl">
        <div className="flex flex-col justify-center text-center items-center">
          <Heading2 className="text-white">Ready to Grow Your Business?</Heading2>
          <p className="text-white mt-4 max-w-[900px]">
            Whether you're just starting out or looking to refresh your brand, let's have a chat about how I can help.
            <br />
            No obligation, no jargon - just practical advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="brand" className="bg-brand-green-400 text-brand-blue-600" asChild>
              <Link href="/get-in-touch">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
