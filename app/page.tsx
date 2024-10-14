import Image from "next/image";
import Link from "next/link";
import caseStudy from "@/resources/case-study.json"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {caseStudy.map((study, index) => (
          <div key={`caseStudy-map-${index}`}>
            <h1>{study.title}</h1>
            <p>{study.body}</p>
            <Image alt={study.title} src={study.image} width={300} height={300} />
            <Link href={`case-studies/${study.url}`}>Link</Link>
          </div>
        ))}
      </main>
    </div>
  );
}
