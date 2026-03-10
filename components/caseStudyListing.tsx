import config from '@payload-config'
import Image from 'next/image'
import { getPayload } from 'payload'
import type { Media } from '@/payload-types'
import { Heading1, Heading4 } from './headings'
import { Badge } from './ui'

export default async function CaseStudyListing() {
  const payload = await getPayload({ config })

  const caseStudies = await payload.find({
    collection: 'case-studies',
    limit: 100,
    sort: '-createdAt',
  })

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: needed for nvigation
    <div className="bg-brand-grey-50 w-full px-4" id="work">
      <div className="p-8 max-w-site w-full flex flex-col gap-8 m-auto text-center">
        <Heading1>Real Businesses, Real Results</Heading1>
        <p className="max-w-[900px] m-auto text-brand-blue-400">
          <span className="font-semibold block">
            We blend strategy, UX, and visual design to deliver cohesive brand and product experiences.
          </span>
          Whether you’re creating something new or refining what already exists, you get consistent, insight-led design
          from a partner who grows with your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {caseStudies.docs.map((caseStudy) => (
            <div key={caseStudy.id} className="group">
              <div className="overflow-hidden">
                {(() => {
                  const thumbnail = caseStudy.thumbnail as Media | undefined
                  return thumbnail?.url ? (
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={thumbnail.url}
                        alt={thumbnail.alt || caseStudy.title || ''}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-3">
                        {/* Badges - hidden below, slides up on hover */}
                        {caseStudy.badges && caseStudy.badges.length > 0 && (
                          <div className="flex w-full gap-2 flex-wrap mb-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            {caseStudy.badges.map((badge, index) => (
                              <Badge variant="ghost" key={`caseStudyBadge-${index}`}>
                                {badge?.title as string}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {/* Title - always visible */}
                        <Heading4 className="text-white text-left">{caseStudy.title}</Heading4>
                      </div>
                    </div>
                  ) : null
                })()}

                <div className="py-3">
                  <p className="text-brand-blue-500 text-sm text-left">{caseStudy['sub-title']}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
