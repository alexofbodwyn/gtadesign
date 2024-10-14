import Image from "next/image";
import Link from "next/link";
import caseStudy from "../resources/caseStudy.json"

export default function Home() {
  return (
    <main className="flex w-full justify-center pt-[50px]">
      {caseStudy.map((study, index) => (
        <div key={`caseStudy-map-${index}`}>
          <h1>{study.title}</h1>
          <p>{study.body}</p>
          <Image alt={study.title} src={study.image} width={300} height={300} />
          <Link href={`case-studies/${study.url}`}>Link</Link>
        </div>
      ))}
    </main>
  );
}
