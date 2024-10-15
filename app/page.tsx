import Image from "next/image";
import Link from "next/link";
import caseStudy from "../resources/case-study.json"
import homePageContent from "../resources/home-page.json"
import Icon, { IconProps } from "../components/icon";


export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center pt-14">
      <div className="max-w-[600px] w-full mx-auto text-center">
        <h1 className="text-4xl">{homePageContent.pageTitle}</h1>
        <p className="mt-10">{homePageContent.pageIntro}</p>
      </div>
      <div className="max-w-[1200px] w-full mt-10 p-3 bg-white border border-slate-300 rounded-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
        <Image alt="GTA Designs" src={homePageContent.heroImage} width={1744} height={800} className="rounded-lg border border-slate-200" />
      </div>
      <div className="bg-slate-700 my-12 p-12 w-full flex flex-col items-center text-center">
        <div className="max-w-[800px]">
          <h2 className="text-3xl text-slate-200 px-24">{homePageContent.panelTitle}</h2>
          <p className="text-slate-200 mt-10 px-24">{homePageContent.panelText}</p>

          <div className="flex gap-4 mt-10 text-left">
            {homePageContent.infoBox.map((box, index) => (
              <div key={`infoBox-map-${index}`} className="flex flex-col border border-slate-600 p-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg w-1/3 drop-shadow h-32">
                <div className="flex items-center">
                  <Icon name={box.icon as IconProps["name"]} color="#bbf7d0" className="w-8 h-8" />
                  <h3 className="text-2xl text-green-200 font-bold ml-2">{box.tite}</h3>
                </div>
                <p className="mt-auto text-slate-300">{box.tite}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center pt-10 gap-4">
        {caseStudy.map((study, index) => (
          <Link href={`case-studies/${study.url}`} key={`caseStudy-map-${index}`} className="border border-slate-300 drop-shadow-sm bg-gradient-to-br from-white to-slate-50 p-4 rounded">
            <Image alt={study.title} src={study.image} width={300} height={300} className="rounded" />
            <h3 className="mt-4 text-lg text-slate-700">{study.title}</h3>
            <p className="text-slate-500">{study.body}</p>
          </Link>
        ))}
      </div>
    </main >
  );
}
