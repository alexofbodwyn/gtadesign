import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('next/link', () => ({
  // Spread ...rest so that Radix UI's Slot can merge onClick and other event
  // handlers onto the <a> when Button uses asChild.
  default: ({ children, href, ...rest }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

import Header from '@/components/header'

// Helpers to simulate scrolling. We have to both set the value AND fire the
// event — the component listens to the 'scroll' event and reads window.scrollY.
function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, configurable: true })
}

function scroll() {
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

describe('Header', () => {
  beforeEach(() => {
    setScrollY(0)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    setScrollY(0)
  })

  // ─── Navigation links ──────────────────────────────────────────────────────

  it('has nav links with the correct hrefs', () => {
    render(<Header />)

    // getAllByRole because each link appears twice: desktop nav + mobile sheet
    for (const link of screen.getAllByRole('link', { name: 'Services' })) {
      expect(link).toHaveAttribute('href', '/#services')
    }
    for (const link of screen.getAllByRole('link', { name: 'Work' })) {
      expect(link).toHaveAttribute('href', '/#work')
    }
    for (const link of screen.getAllByRole('link', { name: 'Experience' })) {
      expect(link).toHaveAttribute('href', '/#experience')
    }
  })

  it('has a Get in Touch link pointing to /get-in-touch', () => {
    render(<Header />)
    for (const link of screen.getAllByRole('link', { name: 'Get in Touch' })) {
      expect(link).toHaveAttribute('href', '/get-in-touch')
    }
  })

  // ─── Scroll visibility ─────────────────────────────────────────────────────

  it('is visible on initial render', () => {
    render(<Header />)
    // <header> has the implicit ARIA role "banner"
    expect(screen.getByRole('banner')).toHaveClass('translate-y-0')
  })

  it('hides when scrolling down past 10px', () => {
    render(<Header />)

    // Scroll to 50px — further than the initial position of 0
    setScrollY(50)
    scroll()

    expect(screen.getByRole('banner')).toHaveClass('-translate-y-full')
  })

  it('shows when scrolling back up', () => {
    render(<Header />)

    // First scroll down to hide it
    setScrollY(100)
    scroll()
    expect(screen.getByRole('banner')).toHaveClass('-translate-y-full')

    // Now scroll up — current position (50) is less than last (100)
    setScrollY(50)
    scroll()
    expect(screen.getByRole('banner')).toHaveClass('translate-y-0')
  })

  it('shows when scrolled back near the top (< 10px)', () => {
    render(<Header />)

    setScrollY(100)
    scroll()
    expect(screen.getByRole('banner')).toHaveClass('-translate-y-full')

    setScrollY(5)
    scroll()
    expect(screen.getByRole('banner')).toHaveClass('translate-y-0')
  })

  // ─── Mobile menu ───────────────────────────────────────────────────────────

  it('opens the mobile menu when the hamburger button is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    // Radix UI sets pointer-events:none on <body> while the dialog is open.
    // userEvent respects that and blocks the click, so we use fireEvent which
    // fires the DOM event directly without a pointer-events check.
    fireEvent.click(within(screen.getByRole('dialog')).getByRole('link', { name: 'Services' }))

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  it('keeps the header visible after a mobile nav link is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }))

    // Radix UI sets pointer-events:none on <body> while the dialog is open.
    fireEvent.click(within(screen.getByRole('dialog')).getByRole('link', { name: 'Services' }))

    // isNavigating is now true — a scroll should NOT hide the header.
    setScrollY(200)
    scroll()

    expect(container.querySelector('header')).toHaveClass('translate-y-0')
  })
})
