'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from '@/components/logo'
import { Button } from './ui/button'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const sentinelRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
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
  }, [lastScrollY])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
  }, [lastScrollY])

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
              <Link href="/">
                <Logo width={50} />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8"></nav>

            <div className="flex items-center space-x-2">
              <Button asChild>
                <Link href={'/'}>Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
