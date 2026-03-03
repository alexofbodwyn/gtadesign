import config from '@payload-config'
import Image from 'next/image'
import { getPayload } from 'payload'
import type { Media } from '@/payload-types'
import { Heading2 } from './headings'

export default async function ClientBlock() {
  const payload = await getPayload({ config })

  const clients = await payload.find({
    collection: 'clients',
  })

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: needed for nvigation
    <div className="w-full px-4 bg-linear-to-t to-[#05566C] from-[#051317]" id="clients">
      <div className="max-w-site w-full m-auto px-8 pt-10 pb-12">
        <Heading2 className="text-brand-green-400 text-center">
          Delivering trusted results to National and Local Business
        </Heading2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-32 gap-y-12 items-center mt-12">
          {clients.docs.map((client) => (
            <div key={client.id} className="group">
              {(() => {
                const logo = client.logo as Media | undefined
                return logo?.url ? (
                  <div className="relative aspect-auto">
                    <Image
                      src={logo.url}
                      alt={client.name || ''}
                      width={logo.width as number}
                      height={logo.height as number}
                      className="object-fit w-[90%] md:w-[75%]"
                    />
                  </div>
                ) : null
              })()}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
