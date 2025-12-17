import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import type { Media } from '@/payload-types'

export async function generateStaticParams() {
  const payload = await getPayload({ config })

  const caseStudies = await payload.find({
    collection: 'case-studies',
    limit: 1000,
  })

  return caseStudies.docs.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const caseStudies = await payload.find({
    collection: 'case-studies',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const caseStudy = caseStudies.docs[0]

  if (!caseStudy) {
    notFound()
  }

  const heroImage = caseStudy.heroImage as Media | undefined

  return (
    <article>
      {/* Hero Section */}
      {heroImage?.url && (
        <div className="relative w-full h-[60vh] mb-12">
          <Image
            src={heroImage.url}
            alt={heroImage.alt || caseStudy.title || ''}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">{caseStudy.title}</h1>

        <div className="prose prose-lg max-w-none">
          <RichText data={caseStudy.description} />
        </div>
      </div>
    </article>
  )
}
