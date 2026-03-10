import config from '@payload-config'
import Image from 'next/image'
import { getPayload } from 'payload'
import { cache } from 'react'
import GetInTouch from '@/components/getInTouch'
import { Heading1, Heading2 } from '@/components/headings'
import { RichText } from '@/components/richText'
import { Badge } from '@/components/ui/'
import type { CaseStudy, Media } from '@/payload-types'

export default async function CaseStudies({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const page: null | CaseStudy = await queryPageBySlug({
    slug,
  })

  const logo = page.logo as Media | undefined
  const heroImage = page.heroImage as Media | undefined

  return (
    <div className="pt-28 w-full">
      <div className="max-w-site w-full mx-auto pb-10 px-4">
        <div className="flex">
          <div className="w-1/2">
            {logo && (
              <div className="relative aspect-auto w-[130px] h-[50px]">
                <Image
                  src={logo.url as string}
                  alt={page.title || ''}
                  width={logo.width as number}
                  height={logo.height as number}
                  className="object-fit"
                />
              </div>
            )}
            <Heading1 className="text-brand-blue-500">{page.title}</Heading1>
            <Heading2>{page['sub-title']}</Heading2>

            {page.badges && page.badges.length && (
              <div className="mt-10 flex w-full gap-2">
                {page.badges.map((badge, index) => (
                  <Badge variant={'outline'} key={`heroBadge-${index}`}>
                    {badge?.title as string}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <div className="w-1/2">
            {heroImage && (
              <div className="relative aspect-auto w-full h-full">
                <Image
                  src={heroImage.url as string}
                  alt={page.title || ''}
                  width={heroImage.width as number}
                  height={heroImage.height as number}
                  className="object-fit"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#051317] w-full">
        <div className="bg-radial-[at_25%_65%]  from-[#066d8a] to-100%">
          <div className="max-w-site w-full mx-auto py-14 px-4">
            <div>
              <Heading2 className="text-brand-green-400">The Challenge</Heading2>
              <div className="mt-10 text-white">
                <RichText data={page.description} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {page.approach && (
        <div className="bg-brand-grey-100 w-full">
          <div className="max-w-site w-full mx-auto py-14 px-4">
            <div>
              <Heading2 className="text-brand-blue-600">The Approach</Heading2>
              <div className="mt-10">
                <RichText data={page.approach} className="[&_p:first-of-type]:text-brand-teal-50" />
              </div>
            </div>
          </div>
        </div>
      )}

      {page.outcome && (
        <div className="bg-white">
          <div className="max-w-site w-full mx-auto py-14  px-4">
            <div>
              <Heading2 className="text-brand-blue-600">The Outcome</Heading2>
              <div className="mt-10">
                <RichText data={page.outcome} className="[&_p:first-of-type]:text-brand-teal-50" />
              </div>
            </div>
          </div>
        </div>
      )}

      <GetInTouch />
    </div>
  )
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'case-studies',
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
