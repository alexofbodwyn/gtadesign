import config from '@payload-config'
import { getPayload } from 'payload'
import CaseStudyGrid from './caseStudyGrid'
import { Heading1 } from './headings'

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
          Whether you're creating something new or refining what already exists, you get consistent, insight-led design
          from a partner who grows with your business.
        </p>

        <CaseStudyGrid caseStudies={caseStudies.docs} />
      </div>
    </div>
  )
}
