import { BuildingOffice2Icon, CheckCircleIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function FeatureList() {
  return (
    <div className="flex-wrap min-lg:flex-nowrap flex max-w-site w-full my-10 justify-between px-4">
      <div className="flex flex-col w-1/2 min-lg:w-full align-top items-center mt-4 min-lg:mt-0">
        <TrophyIcon className="size-8 text-brand-blue-200" />
        <p className="text-brand-blue-700 font-semibold text-2xl mt-4">25+</p>
        <p className="text-brand-blue-200 text-2xl">Years Experience</p>
      </div>
      <div className="flex flex-col  w-1/2 min-lg:w-full align-top items-center  mt-4 min-lg:mt-0">
        <BuildingOffice2Icon className="size-8 text-brand-blue-200" />
        <p className="text-brand-blue-700 font-semibold text-2xl mt-4">Local</p>
        <p className="text-brand-blue-200 text-2xl">SME Focused</p>
      </div>
      <div className="flex flex-col  w-1/2 min-lg:w-full align-top items-center  mt-4 min-lg:mt-0">
        <GlobeAltIcon className="size-8 text-brand-blue-200" />
        <p className="text-brand-blue-700 font-semibold text-2xl mt-4">Global</p>
        <p className="text-brand-blue-200 text-2xl">Expertise</p>
      </div>
      <div className="flex flex-col  w-1/2 min-lg:w-full align-top items-center  mt-4 min-lg:mt-0">
        <CheckCircleIcon className="size-8 text-brand-blue-200" />
        <p className="text-brand-blue-700 font-semibold text-2xl mt-4">Complete</p>
        <p className="text-brand-blue-200 text-2xl">Service</p>
      </div>
    </div>
  )
}
