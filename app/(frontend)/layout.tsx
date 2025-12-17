import type { Metadata } from 'next'
import '@/app/globals.css'
import { Montserrat } from 'next/font/google'

import Footer from '@/components/footer'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: {
    default: 'GTADesign - Web Design & Development',
    template: '%s | GTADesign'
  },
  description: 'Professional web design and development services. Creating beautiful, functional websites that drive results.',
  keywords: ['web design', 'web development', 'UI/UX design', 'mentorship'],
  authors: [{ name: 'GTADesign' }],
  creator: 'GTADesign',
  robots: {
    index: true,
    follow: true,
  },
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Header />
        <main className="flex flex-col w-full justify-center items-center pt-14 mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
