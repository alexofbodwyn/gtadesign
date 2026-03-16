import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Card from '@/components/card'

describe('Card', () => {
  it('merges a custom className without losing the default styles', () => {
    const { container } = render(<Card className="my-custom-class">Content</Card>)
    expect(container.firstChild).toHaveClass('my-custom-class')
    expect(container.firstChild).toHaveClass('border', 'rounded-xl')
  })
})
