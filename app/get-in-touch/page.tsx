import GetInTouchForm from "@/components/getInTouchForm"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeftIcon, EnvelopeIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import Card from "@/components/card"

export default function GetInTouchPage() {
  return (
    <>
      <div className="max-w-site w-full p-4">
        <Button variant="ghost" asChild>
          <Link href="/"><ArrowLeftIcon /> Back to Home</Link>
        </Button>
        <div className="m-auto mt-6 max-w-[650px] flex-inline flex-col justify-center text-center">
          <Badge>Let's Chat</Badge>
          <p className="text-zinc-700 font-semibold mt-6">Ready to Talk About Your Project?</p>
          <p className="text-lg text-zinc-500 mt-6">Whether you know exactly what you need or just have an idea you want to discuss, I'd love to hear from you. No obligation, no sales pressure - just a friendly conversation about how I might be able to help.</p>
        </div>

        <div className="min-lg:grid min-lg:grid-cols-3 min-lg:gap-6 mt-10 mb-8">
          <div className="rounded-2xl p-6 border-2 border-zinc-300 col-span-2">
            <h2 className="text-2xl text-zinc-700">Send Me a Message</h2>
            <p className="text-lg text-zinc-500 mb-8">Fill in the form below and I'll get back to you within 24 hours (usually much sooner!)</p>
            <GetInTouchForm />
          </div>
          <div>
            <div className="mt-6 min-lg:mt-0 rounded-2xl p-6 border-2 border-zinc-300">
              <h3 className="text-2xl text-zinc-700">Prefer to Contact Me Directly?</h3>
              <div className="flex items-start mt-8">
                <EnvelopeIcon width={30} />
                <div className="pl-4">
                  <p>Email</p>
                  <a href="mailto:giles@gtadesign.com">giles@gtadesign.com</a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 border-2 border-zinc-300 mt-6 bg-zinc-50">
              <div className="flex items-start">
                <ChatBubbleOvalLeftIcon width={30} />
                <div className="pl-4">
                  <h3 className="text-2xl text-zinc-700">What Happens Next?</h3>
                </div>
              </div>
              <ol className="list-decimal pt-4 pl-5">
                <li className="mt-4">I'll review your message and respond personally</li>
                <li className="mt-4">We'll arrange a free consultation (phone, video, or in person)</li>
                <li className="mt-4">I'll provide a clear proposal with fixed pricing</li>
                <li className="mt-4">You decide if it's right for you - no pressure!</li>
              </ol>
            </div>
          </div>
        </div>
      </div >
      <div className="bg-zinc-50 w-full mt-10 py-12">
        <div className="max-w-[1000px] w-full m-auto px-4">
          <div className="m-auto max-w-[650px] flex-inline flex-col justify-center text-center">
            <h2 className="text-zinc-700 text-2xl mt-10">Common Questions</h2>
            <p className="text-lg text-zinc-500 mt-6">Before you get in touch, here are answers to questions I'm often asked</p>
          </div>
          <div className="min-lg:grid min-lg:grid-cols-2 min-lg:grid-rows-2 gap-6 mt-10 mb-8">
            <Card className="p-6 rounded-2xl">
              <h3>Do you charge for the initial consultation?</h3>
              <p className="mt-6 text-sm text-zinc-500">No! The first chat is always free with no obligation. It's a chance for us to understand each other and see if we're a good fit.</p>
            </Card>
            <Card className="mt-6 min-lg:mt-0 p-6 rounded-2xl">
              <h3>What if I'm not sure what I need?</h3>
              <p className="mt-6 text-sm text-zinc-500">That's absolutely fine! Part of my job is helping you figure out what's right for your business. Just tell me about your goals and challenges.</p>
            </Card>
            <Card className="mt-6 min-lg:mt-0 p-6 rounded-2xl">
              <h3>How long does a typical project take?</h3>
              <p className="mt-6 text-sm text-zinc-500">It varies - a logo might take 2-3 weeks, a website 6-8 weeks. I'll give you a realistic timeline upfront and keep you updated throughout.</p>
            </Card>
            <Card className="mt-6 min-lg:mt-0 p-6 rounded-2xl">
              <h3>Do you work with businesses outside your area?</h3>
              <p className="mt-6 text-sm text-zinc-500">Yes! While I'm based locally and love supporting our community, I work with businesses throughout New Zealand and beyond via video calls.</p>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}