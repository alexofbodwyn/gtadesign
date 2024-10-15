import Link from "next/link"
import { SendHorizontal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-100 border border-t-slate-300 flex flex-col items-center w-full p-4 mt-12">
      <div className="max-w-[1200px] w-full mx-auto py-12">
        <h2 className="text-4xl text-slate-700">What to get in touch?</h2>
        <p className="max-w-[600px] mt-10 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a orci finibus nibh semper volutpat.</p>
        <Link href="mailto:alexefthymiou@gmail.com" className="inline-flex border rounded-lg py-2 px-4 mt-8 bg-slate-600 drop-shadow">
          <span className="pr-2 text-slate-50">Email us</span>
          <span><SendHorizontal color="#f8fafc" /></span>
        </Link>
      </div>
    </footer>
  )
} 