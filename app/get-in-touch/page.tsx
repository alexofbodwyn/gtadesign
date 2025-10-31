import GetInTouchForm from "@/components/getInTouchForm"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeftIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function GetInTouchPage() {
  return (
    <div className="max-w-site w-full">
      <Button variant="ghost" asChild>
        <Link href="/"><ArrowLeftIcon /> Back to Home</Link>
      </Button>
      <div className="m-auto mt-6 max-w-[650px] flex-inline flex-col justify-center text-center">
        <Badge>Let's Chat</Badge>
        <p className="text-zinc-700 mt-6">Ready to Talk About Your Project?</p>
        <p className="text-lg text-zinc-500 mt-6">Whether you know exactly what you need or just have an idea you want to discuss, I'd love to hear from you. No obligation, no sales pressure - just a friendly conversation about how I might be able to help.</p>
      </div>

      <div className="grid grid-rows-1 grid-flow-col gap-6 mt-10 mb-8">
        <div className="rounded-2xl p-6 border-2 border-zinc-300">
          <h2 className="text-2xl text-zinc-700">Send Me a Message</h2>
          <p className="text-lg text-zinc-500 mb-8">Fill in the form below and I'll get back to you within 24 hours (usually much sooner!)</p>
          <GetInTouchForm />
        </div>
        <div>
          <div className="rounded-2xl p-6 border-2 border-zinc-300">
            <h3 className="text-2xl text-zinc-700">Prefer to Contact Me Directly?</h3>
            <div className="flex items-start mt-8">
              <EnvelopeIcon width={30} />
              <div className="pl-4">
                <p>Email</p>
                <a href="mailto:giles@gtadesign.com">giles@gtadesign.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}