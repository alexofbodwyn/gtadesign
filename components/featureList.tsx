import { BuildingOffice2Icon, CheckCircleIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function FeatureList() {
  return (
    <div className="flex max-w-site w-full my-10 justify-between">
      <div className="flex gap-2 align-top">
        <TrophyIcon className="size-6" />
        <div>
          <p>25+</p>
          <p className="text-zinc-400">Years Experience</p>
        </div>
      </div>
      <div className="flex gap-2 align-top">
        <BuildingOffice2Icon className="size-6" />
        <div>
          <p>Local</p>
          <p className="text-zinc-400">SME Focused</p>
        </div>
      </div>
      <div className="flex gap-2 align-top">
        <GlobeAltIcon className="size-6" />
        <div>
          <p>Global</p>
          <p className="text-zinc-400">Expertise</p>
        </div>
      </div>
      <div className="flex gap-2 align-top">
        <CheckCircleIcon className="size-6" />
        <div>
          <p>Complete</p>
          <p className="text-zinc-400">Service</p>
        </div>
      </div>
    </div>
  )
}
