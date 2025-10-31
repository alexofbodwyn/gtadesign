import { CursorArrowRaysIcon, DocumentTextIcon, FingerPrintIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import Card from '@/components/card'
import FeatureList from '@/components/featureList'
import Hero from '@/components/hero'
import { Badge } from '@/components/ui/badge'

const brandBadges = ['Logo Design', 'Brand Identity', 'Visual Systems', 'Brand Guidelines']

const printBadges = ['Business Cards', 'Brochures', 'Marketing Materials', 'Signage']

const webBadges = ['Website Design', 'E-commerce', 'Mobile Friendly', 'Easy to Update']

const uxBadges = ['User Experience', 'Customer Journeys', 'Interface Design', 'Usability']

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureList />
      <div className="bg-zinc-50 w-full mt-10">
        <div className="p-8 max-w-site w-full flex flex-col gap-8 m-auto">
          <div className="flex flex-col justify-center text-center items-center">
            <h2 className="text-3xl text-zinc-700">Everything You Need, All in One Place</h2>
            <p className="text-zinc-500 mt-4 max-w-[650px]">
              Whether you're just starting out or looking to refresh your brand, I offer a complete range of design
              services to help your business succeeds
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-wrap">
            <Card>
              <div className="rounded-md bg-zinc-700 p-2 size-10 flex items-center justify-center">
                <FingerPrintIcon className="size-6 stroke-white" />
              </div>
              <p className="mt-4">Brand</p>
              <p className="text-zinc-500">
                Starting from scratch? I'll help you create a brand identity that truly represents your business - from
                your first logo to complete brand guidelines.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {brandBadges.map((badge, index) => (
                  <Badge key={`brandBadge-${index}`}>{badge}</Badge>
                ))}
              </div>
            </Card>
            <Card>
              <div className="rounded-md bg-zinc-700 p-2 size-10 flex items-center justify-center">
                <DocumentTextIcon className="size-8 stroke-white" />
              </div>
              <p className="mt-4">Print</p>
              <p className="text-zinc-500">
                All your print needs covered - business cards, brochures, marketing materials, and more. Professional
                quality that makes your business look the part.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {printBadges.map((badge, index) => (
                  <Badge key={`printBadge-${index}`}>{badge}</Badge>
                ))}
              </div>
            </Card>
            <Card>
              <div className="rounded-md bg-zinc-700 p-2 size-10 flex items-center justify-center">
                <GlobeAltIcon className="size-8 stroke-white" />
              </div>
              <p className="mt-4">Web</p>
              <p className="text-zinc-500">
                Need a website but don't know where to start? I'll guide you through the process and create a site that
                works for your business and your customers.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {webBadges.map((badge, index) => (
                  <Badge key={`webBadge-${index}`}>{badge}</Badge>
                ))}
              </div>
            </Card>
            <Card>
              <div className="rounded-md bg-zinc-700 p-2 size-10 flex items-center justify-center">
                <CursorArrowRaysIcon className="size-8 stroke-white" />
              </div>
              <p className="mt-4">UX</p>
              <p className="text-zinc-500">
                Make sure your digital presence actually works for your customers. I'll help you create intuitive,
                user-friendly experiences that get results.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {uxBadges.map((badge, index) => (
                  <Badge key={`uxBadge-${index}`}>{badge}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
