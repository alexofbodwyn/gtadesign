/**
 * Tests for the Badge component.
 *
 * Badge is a thin wrapper around CVA — there's almost no logic of our own here.
 * The one thing worth testing is that custom classNames merge correctly with the
 * defaults without clobbering them (that's our cn() utility doing real work).
 * Everything else (React rendering children, CVA applying classes) is those
 * libraries' responsibility to test, not ours.
 */
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge } from '@/components/ui/badge'

describe('Badge', () => {
  it('merges a custom className without losing the default styles', () => {
    const { container } = render(<Badge className="my-extra-class">Branding</Badge>)
    expect(container.firstChild).toHaveClass('my-extra-class')
    expect(container.firstChild).toHaveClass('inline-flex') // default still present
  })
})
