import config from '@payload-config'
import Image from 'next/image'
import { getPayload } from 'payload'
import type { Media } from '@/payload-types'
import { Heading1, Heading4 } from './headings'

export default async function CaseStudyListing() {
  const payload = await getPayload({ config })

  const caseStudies = await payload.find({
    collection: 'case-studies',
    limit: 100,
    sort: '-createdAt',
  })

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: needed for nvigation
    <div className="bg-white w-full mt-10 px-4" id="work">
      <div className="p-8 max-w-site w-full flex flex-col gap-8 m-auto">
        <Heading1>Real Businesses, Real Results</Heading1>
        <p className="max-w-[750px]">
          We blend strategy, UX, and visual design to deliver cohesive brand and product experiences. Whether you’re
          creating something new or refining what already exists, you get consistent, insight-led design from a partner
          who grows with your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.docs.map((caseStudy) => (
            <div key={caseStudy.id} className="group">
              <div className="overflow-hidden">
                {(() => {
                  const thumbnail = caseStudy.thumbnail as Media | undefined
                  return thumbnail?.url ? (
                    <div className="relative aspect-video">
                      <Image
                        src={thumbnail.url}
                        alt={thumbnail.alt || caseStudy.title || ''}
                        fill
                        className="object-fit"
                      />
                    </div>
                  ) : null
                })()}

                <div className="py-6">
                  <Heading4>{caseStudy.title}</Heading4>
                  <p className="mt-4 text-brand-blue-200 text-sm">{caseStudy['sub-title']}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
