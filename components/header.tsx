'use client'

import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from '@/components/logo'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from './ui/button'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [open, setOpen] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const sentinelRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating) {
        return
      }
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isNavigating])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (isNavigating) {
          return
        }

        if (!entry.isIntersecting && window.scrollY > lastScrollY) {
          setIsVisible(false)
        }
      },
      { threshold: 0.5 },
    )

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current)
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current)
      }
    }
  }, [lastScrollY, isNavigating])

  const handleMobileButton = () => {
    setIsVisible(true)
    setOpen(false)
    setIsNavigating(true)

    setTimeout(() => {
      setIsNavigating(false)
    }, 300)
  }

  return (
    <div>
      <div ref={sentinelRef} className="h-1 absolute top-20" />
      <header
        className={`fixed h-16 top-0 left-0 right-0 bg-white border-b border-b-zinc-300 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="focus:outline-0 active:outline-0">
                <Logo width={80} />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Button variant="ghost" asChild>
                <Link href="/#services">Services</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/#work">Work</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/#experience">Experience</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/#mentorship">Mentorship</Link>
              </Button>
            </nav>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="block md:hidden">
                <Button>
                  <Bars3Icon className="size-10 text-lg" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white">
                <SheetHeader>
                  <SheetTitle className="text-brand-blue-500">GTADesign</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-4 mt-8">
                  <Button variant="ghost" asChild onClick={() => handleMobileButton()}>
                    <Link href="/#services">Services</Link>
                  </Button>
                  <Button variant="ghost" asChild onClick={() => handleMobileButton()}>
                    <Link href="/#work">Work</Link>
                  </Button>
                  <Button variant="ghost" asChild onClick={() => handleMobileButton()}>
                    <Link href="/#experience">Experience</Link>
                  </Button>
                  <Button variant="ghost" asChild onClick={() => handleMobileButton()}>
                    <Link href="/#mentorship">Mentorship</Link>
                  </Button>
                  <Button asChild className="cursor-pointer" onClick={() => handleMobileButton()}>
                    <Link href={'/get-in-touch'}>Get in Touch</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            <div className="hidden md:flex items-center space-x-2">
              <Button asChild className="cursor-pointer">
                <Link href={'/get-in-touch'}>Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
