import Link from "next/link"
import { Origami } from "lucide-react"

export default function Header() {
  return (
    <div className="bg-slate-100 border border-b-slate-300 flex items-center w-full p-4 h-[70px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      <div className="flex items-center relative w-full">
        <div className="flex items-center absolute left-0 top-[-3px]">
          <Origami size={32} />
          <span className="ml-2"><span className="text-slate-500 font-bold">GTA</span>DESIGN</span>
        </div>
        <nav className="flex items-center justify-center mx-auto">
          <Link href="/home" className="mx-3">Home</Link>
          <Link href="/home" className="mx-3">Case studies</Link>
        </nav>
      </div>
    </div>
  )
} 