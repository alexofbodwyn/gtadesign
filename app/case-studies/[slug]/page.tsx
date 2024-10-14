import Image from "next/image";
import Link from "next/link";
import caseStudy from "@/content/case-study.json"

type CaseStudyPageProps = {
  params: { slug: string }
}

export default function CaseStudyPage({ params: { slug } }: CaseStudyPageProps) {
  const study = caseStudy.find(study => study.url === slug);

  if (!study) {
    return <p>Case study not found</p>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1>{study.title}</h1>
          <p>{study.body}</p>
          <Image alt={study.title} src={study.image} width={300} height={300} />
        </div>
      </main>
    </div>
  );
}