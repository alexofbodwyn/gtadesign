export const dynamic = 'force-dynamic'

import {
  AcademicCapIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  HeartIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/card'
import CaseStudyListing from '@/components/caseStudyListing'
import FeatureList from '@/components/featureList'
import { Heading2, Heading3 } from '@/components/headings'
import Hero from '@/components/hero'
import { Badge, Button } from '@/components/ui'

const webBadges = [
  'Website Design',
  'Graphic Design',
  'Marketing',
  'Advertising',
  'Branding',
  'UX Design',
  'Design Systems',
]

const uxBadges = ['E-commerce', 'Charity', 'Banking', 'Logistics', 'Telcos', 'SaaS', 'Construction', 'Sports', 'Events']

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureList />
      {/** biome-ignore lint/correctness/useUniqueElementIds: needed for navigation */}
      <div className="bg-brand-blue-700 w-full mt-8 sm:mt-10 px-4" id="services">
        <div className="p-8 max-w-site w-full flex flex-col gap-8 m-auto">
          <div className="flex flex-col justify-center text-center items-center">
            <Heading2 className="text-brand-green-400">Everything You Need, All in One Place</Heading2>
            <p className="text-white mt-4 max-w-[720px]">
              Whether you're just starting out or looking to refresh your brand, I offer a complete range of design
              services to help your business succeeds
            </p>
          </div>
          <div className="min-lg:grid grid-cols-2 gap-4 flex-wrap">
            <Card>
              <div className="rounded-md bg-white p-0 size-10 flex items-center justify-center">
                <FingerPrintIcon className="size-10 stroke-brand-blue-200" />
              </div>
              <Heading3>Brand</Heading3>
              <p className="text-zinc-500">
                Starting from scratch? I'll help you create a brand identity that truly represents your business - from
                your first logo to complete brand guidelines.
              </p>
            </Card>
            <Card className="mt-4 min-lg:mt-0">
              <div className="rounded-md bg-white p-0 size-10 flex items-center justify-center">
                <DocumentTextIcon className="size-10 stroke-brand-blue-200" />
              </div>
              <Heading3>Print</Heading3>
              <p className="text-zinc-500">
                All your print needs covered - business cards, brochures, marketing materials, and more. Professional
                quality that makes your business look the part.
              </p>
            </Card>
            <Card className="mt-4 min-lg:mt-0">
              <div className="rounded-md bg-white p-0 size-10 flex items-center justify-center">
                <GlobeAltIcon className="size-10 stroke-brand-blue-200" />
              </div>
              <Heading3>Web</Heading3>
              <p className="text-zinc-500">
                Need a website but don't know where to start? I'll guide you through the process and create a site that
                works for your business and your customers.
              </p>
            </Card>
            <Card className="mt-4 min-lg:mt-0">
              <div className="rounded-md bg-white p-0 size-10 flex items-center justify-center">
                <CursorArrowRaysIcon className="size-10 stroke-brand-blue-200" />
              </div>
              <Heading3>UX</Heading3>
              <p className="text-zinc-500">
                Make sure your digital presence actually works for your customers. I'll help you create intuitive,
                user-friendly experiences that get results.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <CaseStudyListing />

      {/** biome-ignore lint/correctness/useUniqueElementIds: needed for navigation */}
      <div className="bg-brand-blue-50 w-full mt-8 sm:mt-10  px-4" id="experience">
        <div className="p-8 max-w-site w-full flex flex-col gap-8 m-auto">
          <div className="min-lg:grid grid-cols-2 gap-4 flex-wrap">
            <div className="flex flex-col">
              <Heading2>
                One Partner.
                <br />
                Every Design need.
              </Heading2>
              <p className="text-brand-blue-700 mt-4">
                <strong>International Background, Universal Commitment</strong>
                <br />
                I've worked across New Zealand, London, Manchester, Leeds, Liverpool, UK, gaining valuable insights that
                I now apply to help companies thrive on any level.
              </p>
              <p className="text-brand-blue-700 mt-4">
                <strong>Real-World Experience</strong>
                <br />
                From charities to e-commerce, banking to SaaS platforms - I understand what works, and how to make it
                work for your business, no matter the size.
              </p>
            </div>
            <div>
              <div>
                <p className="text-brand-blue-700 mt-4">Expertise</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {webBadges.map((badge, index) => (
                    <Badge variant={'secondary'} key={`webBadge-${index}`}>
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-brand-blue-700 mt-4">Industries Served</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {uxBadges.map((badge, index) => (
                    <Badge key={`uxBadge-${index}`}>{badge}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** biome-ignore lint/correctness/useUniqueElementIds: needed for navigation */}
      <div className="bg-white w-full mt-8 sm:mt-10  px-4" id="mentorship">
        <div className="p-8 max-w-site w-full flex flex-col m-auto">
          <Heading2>Giving Back to Our Community</Heading2>
          <p className="text-brand-blue-700">
            I'm passionate about helping young designers find their way in the industry, sharing the lessons I've
            learned over 25 years.
          </p>

          <div className="min-lg:grid grid-cols-2 gap-8 flex-wrap mt-8">
            <div className="flex flex-col">
              <Image
                src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/site/mentor.png`}
                alt="Mentorship"
                width={500}
                height={500}
                quality={90}
                className="rounded-xl w-full"
              />
            </div>
            <div className="flex flex-col gap-y-4 mt-8 sm:mt-0">
              <div className="flex gap-x-4">
                <div className="rounded-xl bg-brand-blue-700 p-0 h-10 min-w-10 flex items-center justify-center">
                  <UsersIcon className="size-6 text-white" />
                </div>
                <p>
                  <strong>Personal Mentorship</strong>
                  <br />I work one-on-one with emerging designers, helping them develop their skills and navigate the
                  realities of working in the design industry.
                </p>
              </div>
              <div className="flex gap-x-4">
                <div className="rounded-xl bg-brand-blue-700 p-0 h-10 min-w-10 flex items-center justify-center">
                  <AcademicCapIcon className="size-6 text-white" />
                </div>
                <p>
                  <strong>Real-World Knowledge</strong>
                  <br />
                  Having worked across New Zealand, London, Manchester, Leeds, and Liverpool, I share practical insights
                  you can't learn in school.
                </p>
              </div>
              <div className="flex gap-x-4">
                <div className="rounded-xl bg-brand-blue-700 p-0 h-10 min-w-10 flex items-center justify-center">
                  <HeartIcon className="size-6 text-white" />
                </div>
                <p>
                  <strong>Building Our Creative Community</strong>
                  <br />
                  Investing in the next generation helps strengthen our local design community and supports creative
                  businesses in our area.
                </p>
              </div>

              <div className="mt-8 sm:mt-auto text-center sm:text-left">
                <Button asChild>
                  <Link href="/get-in-touch">Get in Touch About Mentorship</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full my-10 px-4">
        <div className="p-8 max-w-site w-full flex flex-col gap-8 m-auto bg-brand-blue-700 rounded-xl">
          <div className="flex flex-col justify-center text-center items-center">
            <Heading2 className="text-white">Ready to Grow Your Business?</Heading2>
            <p className="text-white mt-4 max-w-[720px]">
              Whether you're just starting out or looking to refresh your brand, let's have a chat about how I can help.
              No obligation, no jargon - just practical advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="secondary" asChild>
                <Link href="/get-in-touch">
                  <EnvelopeIcon />
                  Get in Touch
                </Link>
              </Button>

              <Button variant="outline" className="text-white">
                <Link href="/get-in-touch">Book a Free Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
