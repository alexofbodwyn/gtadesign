/**
 * Tests for CaseStudyGrid.
 *
 * This is why we split the server component (CaseStudyListing) from the
 * display component (CaseStudyGrid). The server component just fetches data —
 * there's nothing to test there without mocking a database. CaseStudyGrid
 * takes plain props and has real conditional logic worth testing:
 *
 *   - A card with no thumbnail renders nothing for the image area
 *   - A card with a thumbnail renders the title
 *   - A card with badges renders them; one without badges doesn't
 */
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CaseStudyGrid from '@/components/caseStudyGrid'
import type { CaseStudy, Media } from '@/payload-types'

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}))

// Build a minimal CaseStudy fixture. Using a factory function means each test
// can override just the fields it cares about, keeping tests readable.
function makeCaseStudy(overrides: Partial<CaseStudy> = {}): CaseStudy {
  return {
    id: 1,
    title: 'Test Project',
    'sub-title': 'A subtitle',
    slug: 'test-project',
    heroImage: 1,
    badges: null,
    thumbnail: 1, // unpopulated by default — no url, so no image rendered
    description: { root: { type: 'root', children: [], direction: null, format: '', indent: 0, version: 1 } },
    updatedAt: '2024-01-01',
    createdAt: '2024-01-01',
    ...overrides,
  }
}

function makeMedia(url: string): Media {
  return {
    id: 99,
    alt: 'An image',
    url,
    width: 800,
    height: 600,
    updatedAt: '2024-01-01',
    createdAt: '2024-01-01',
  }
}

describe('CaseStudyGrid', () => {
  it('renders nothing when given an empty list', () => {
    const { container } = render(<CaseStudyGrid caseStudies={[]} />)
    // The grid wrapper renders but contains no cards
    expect(container.querySelectorAll('.group')).toHaveLength(0)
  })

  it('renders a card for each case study', () => {
    const studies = [makeCaseStudy({ id: 1 }), makeCaseStudy({ id: 2 }), makeCaseStudy({ id: 3 })]
    const { container } = render(<CaseStudyGrid caseStudies={studies} />)
    expect(container.querySelectorAll('.group')).toHaveLength(3)
  })

  it('does not render an image when the thumbnail has no url', () => {
    // thumbnail is just an ID (unpopulated relation) — no url available
    render(<CaseStudyGrid caseStudies={[makeCaseStudy({ thumbnail: 1 })]} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('renders the image when the thumbnail is a populated Media object with a url', () => {
    const study = makeCaseStudy({ thumbnail: makeMedia('https://example.com/image.jpg') })
    render(<CaseStudyGrid caseStudies={[study]} />)
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  it('renders the case study title over the image', () => {
    const study = makeCaseStudy({
      title: 'Brand Redesign for Acme',
      thumbnail: makeMedia('https://example.com/image.jpg'),
    })
    render(<CaseStudyGrid caseStudies={[study]} />)
    expect(screen.getByRole('heading', { name: 'Brand Redesign for Acme' })).toBeInTheDocument()
  })

  it('renders the sub-title below the image', () => {
    const study = makeCaseStudy({ 'sub-title': 'UX & Branding' })
    render(<CaseStudyGrid caseStudies={[study]} />)
    expect(screen.getByText('UX & Branding')).toBeInTheDocument()
  })

  it('does not render a badge row when there are no badges', () => {
    const study = makeCaseStudy({
      badges: null,
      thumbnail: makeMedia('https://example.com/image.jpg'),
    })
    const { container } = render(<CaseStudyGrid caseStudies={[study]} />)
    // The badge container should not exist at all
    expect(container.querySelector('.translate-y-full')).not.toBeInTheDocument()
  })

  it('renders each badge when badges are present', () => {
    const study = makeCaseStudy({
      badges: [
        { title: 'UX Design', id: '1' },
        { title: 'Branding', id: '2' },
      ],
      thumbnail: makeMedia('https://example.com/image.jpg'),
    })
    render(<CaseStudyGrid caseStudies={[study]} />)
    expect(screen.getByText('UX Design')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
  })
})
