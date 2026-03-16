import Image from 'next/image'
import Link from 'next/link'
import type { CaseStudy, Media } from '@/payload-types'
import { Heading4 } from './headings'
import { Badge } from './ui'

export default function CaseStudyGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {caseStudies.map((caseStudy) => {
        const thumbnail = caseStudy.thumbnail as Media | undefined

        return (
          <Link key={caseStudy.id} href={`/case-studies/${caseStudy.slug}`} className="group">
            <div className="overflow-hidden">
              {thumbnail?.url ? (
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={thumbnail.url}
                    alt={thumbnail.alt || caseStudy.title || ''}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-3">
                    {caseStudy.badges && caseStudy.badges.length > 0 && (
                      <div className="flex w-full gap-2 flex-wrap mb-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {caseStudy.badges.map((badge, index) => (
                          <Badge variant="ghost" key={`caseStudyBadge-${index}`}>
                            {badge?.title as string}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <Heading4 className="text-white text-left">{caseStudy.title}</Heading4>
                  </div>
                </div>
              ) : null}

              <div className="py-3">
                <p className="text-brand-blue-500 text-sm text-left">{caseStudy['sub-title']}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
