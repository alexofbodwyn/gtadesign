import { BuildingOffice2Icon, CheckCircleIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function FeatureList() {
  return (
    <div className="flex-wrap min-lg:flex-nowrap flex max-w-site w-full my-10 justify-between px-4">
      <div className="flex w-1/2 min-lg:w-full gap-2 align-top mt-4 min-lg:mt-0">
        <TrophyIcon className="size-6" />
        <div>
          <p>25+</p>
          <p className="text-zinc-400">Years Experience</p>
        </div>
      </div>
      <div className="flex w-1/2 min-lg:w-full gap-2 align-top mt-4 min-lg:mt-0">
        <BuildingOffice2Icon className="size-6" />
        <div>
          <p>Local</p>
          <p className="text-zinc-400">SME Focused</p>
        </div>
      </div>
      <div className="flex w-1/2 min-lg:w-full gap-2 align-top mt-4 min-lg:mt-0">
        <GlobeAltIcon className="size-6" />
        <div>
          <p>Global</p>
          <p className="text-zinc-400">Expertise</p>
        </div>
      </div>
      <div className="flex w-1/2 min-lg:w-full gap-2 align-top mt-4 min-lg:mt-0">
        <CheckCircleIcon className="size-6" />
        <div>
          <p>Complete</p>
          <p className="text-zinc-400">Service</p>
        </div>
      </div>
    </div>
  )
}
