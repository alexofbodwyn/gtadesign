import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import type { Media } from '@/payload-types'

export default async function CaseStudiesPage() {
  const payload = await getPayload({ config })

  const caseStudies = await payload.find({
    collection: 'case-studies',
    limit: 100,
    sort: '-createdAt',
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.docs.map((caseStudy) => (
          <Link key={caseStudy.id} href={`/case-studies/${caseStudy.slug}`} className="group">
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {(() => {
                const thumbnail = caseStudy.thumbnail as Media | undefined
                return thumbnail?.url ? (
                  <div className="relative aspect-video">
                    <Image
                      src={thumbnail.url}
                      alt={thumbnail.alt || caseStudy.title || ''}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                ) : null
              })()}

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {caseStudy.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
