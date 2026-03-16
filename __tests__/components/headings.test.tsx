import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Heading2, Heading3 } from '@/components/headings'

describe('Heading2', () => {
  it('renders as an <h2> element', () => {
    // Worth testing: you chose h2, not div/p. If that changes, SEO and
    // accessibility break. getByRole also confirms the semantic tag, not just text.
    render(<Heading2>Section Title</Heading2>)
    expect(screen.getByRole('heading', { level: 2, name: 'Section Title' })).toBeInTheDocument()
  })

  it('merges a custom className without losing the default styles', () => {
    render(<Heading2 className="text-red-500">Title</Heading2>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-red-500')
    expect(heading).toHaveClass('tracking-wide')
  })
})

describe('Heading3', () => {
  it('renders as an <h3> element', () => {
    render(<Heading3>Sub Title</Heading3>)
    expect(screen.getByRole('heading', { level: 3, name: 'Sub Title' })).toBeInTheDocument()
  })
})
