/**
 * Tests for the Hero component.
 *
 * KEY TDD CONCEPT: Mocking external dependencies.
 * The Hero uses `next/link` which relies on the Next.js router — something that
 * doesn't exist in a test environment. We use `vi.mock` to replace it with a
 * simple `<a>` tag so our test doesn't explode.
 *
 * Rule of thumb: mock at the boundary of your component.
 * You're not testing Next.js — you're testing YOUR code.
 */
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

// Must be called before any imports that use the mocked module.
// vi.mock is automatically hoisted to the top of the file by Vitest.
vi.mock('next/link', () => ({
  // Replace next/link with a plain <a> tag for tests
  default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a>,
}))

import Hero from '@/components/hero'

describe('Hero', () => {
  it('displays the main headline', () => {
    render(<Hero />)
    // The heading exists and is an h1 (important for SEO)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Strategic UX, Brand & Website Design/i,
      }),
    ).toBeInTheDocument()
  })

  it('displays the supporting description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Helping SMEs and organisations/i)).toBeInTheDocument()
  })

  it('has a call-to-action link to the contact page', () => {
    render(<Hero />)
    // getByRole('link') finds an <a> tag — better than querying by text alone
    // because it also confirms it's an actual link (not just styled text)
    const cta = screen.getByRole('link', { name: /Book a Consultation/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/get-in-touch')
  })
})
