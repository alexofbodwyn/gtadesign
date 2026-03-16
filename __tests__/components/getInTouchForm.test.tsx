/**
 * Tests for the GetInTouchForm component.
 *
 * KEY TDD CONCEPT: Integration testing + async behaviour.
 * This component is more complex — it has:
 *   - Form validation (via Zod + react-hook-form)
 *   - An async API call (fetch)
 *   - Multiple UI states (idle, sending, success, error)
 *
 * We test all of these to make sure the whole flow works together.
 *
 * KEY TDD CONCEPT: Mocking fetch.
 * We don't want real HTTP requests in tests — they're slow and unpredictable.
 * Instead we replace `fetch` with a mock that instantly returns what we tell it to.
 *
 * KEY TDD CONCEPT: userEvent vs fireEvent.
 * `userEvent` simulates real user interactions (typing character by character,
 * clicking, tabbing). It's more realistic than `fireEvent` which is lower level.
 * Prefer `userEvent` for form tests.
 */
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import GetInTouchForm from '@/components/getInTouchForm'

// Helper: fill in all required fields with valid data so we can test submission.
// Extracting this into a helper keeps each test focused on what it's actually testing.
async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByPlaceholderText('first name...'), 'Jane')
  await user.type(screen.getByPlaceholderText('last name...'), 'Smith')
  await user.type(screen.getByPlaceholderText('john@example.com'), 'jane@example.com')
  await user.type(
    screen.getByPlaceholderText(/Describe your project/i),
    'I need a complete brand identity for my new café business.',
  )
  // Note: the Select fields (interestedIn, timeline) already have default values
  // so we don't need to interact with them for a valid submission.
}

describe('GetInTouchForm', () => {
  // Set up a fresh userEvent instance before each test.
  // `userEvent.setup()` configures the event simulation properly for React 18+.
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  afterEach(() => {
    // Reset any mocks after each test so they don't bleed into the next one
    vi.restoreAllMocks()
  })

  // ─── Rendering ───────────────────────────────────────────────────────────────

  it('renders all required fields', () => {
    render(<GetInTouchForm />)

    expect(screen.getByPlaceholderText('first name...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('last name...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('john@example.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Describe your project/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<GetInTouchForm />)
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  // ─── Validation ──────────────────────────────────────────────────────────────

  it('shows a validation error when first name is too short', async () => {
    render(<GetInTouchForm />)

    // Type a single character (below the 2-char minimum)
    await user.type(screen.getByPlaceholderText('first name...'), 'J')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    // waitFor keeps retrying the assertion until it passes (or times out).
    // We need this because react-hook-form updates state asynchronously.
    await waitFor(() => {
      expect(screen.getByText('First name must be at least 2 characters.')).toBeInTheDocument()
    })
  })

  it('shows a validation error for an invalid email', async () => {
    const { container } = render(<GetInTouchForm />)

    await user.type(screen.getByPlaceholderText('first name...'), 'Jane')
    await user.type(screen.getByPlaceholderText('last name...'), 'Smith')
    await user.type(screen.getByPlaceholderText('john@example.com'), 'not-an-email')
    await user.type(
      screen.getByPlaceholderText(/Describe your project/i),
      'I need a complete brand identity for my new café business.',
    )

    // KEY INSIGHT: jsdom's native HTML5 constraint validation for type="email"
    // blocks the submit event from reaching react-hook-form when the value is
    // a non-empty invalid email. `fireEvent.submit` bypasses native validation
    // and fires the submit event directly — which is what we want here.
    // In a real browser the form would show a native tooltip instead.
    const form = container.querySelector('form')
    if (form) fireEvent.submit(form)

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    })
  })

  it('shows a validation error when project details are too short', async () => {
    render(<GetInTouchForm />)

    await user.type(screen.getByPlaceholderText('first name...'), 'Jane')
    await user.type(screen.getByPlaceholderText('last name...'), 'Smith')
    await user.type(screen.getByPlaceholderText('john@example.com'), 'jane@example.com')
    await user.type(screen.getByPlaceholderText(/Describe your project/i), 'Too short')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    await waitFor(() => {
      expect(screen.getByText('Please tell us about your project (at least 10 characters).')).toBeInTheDocument()
    })
  })

  // ─── Submission states ────────────────────────────────────────────────────────

  it('disables the submit button and shows "Sending..." while submitting', async () => {
    // Make fetch hang forever so we can see the "sending" state
    vi.stubGlobal(
      'fetch',
      vi.fn(() => new Promise(() => {})), // never resolves
    )

    render(<GetInTouchForm />)
    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    await waitFor(() => {
      const button = screen.getByRole('button', { name: 'Sending...' })
      expect(button).toBeInTheDocument()
      expect(button).toBeDisabled()
    })
  })

  it('shows a success message after the API returns ok', async () => {
    // Mock fetch to immediately return a successful response
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
        }),
      ),
    )

    render(<GetInTouchForm />)
    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument()
    })
  })

  it('resets the form fields after a successful submission', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.resolve({ ok: true })),
    )

    render(<GetInTouchForm />)
    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    await waitFor(() => {
      // After success the form resets — firstName input should be empty
      expect(screen.getByPlaceholderText('first name...')).toHaveValue('')
    })
  })

  it('shows an error message when the API returns a non-ok response', async () => {
    // Mock fetch to return a server error
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 500,
        }),
      ),
    )

    render(<GetInTouchForm />)
    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    await waitFor(() => {
      expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument()
    })
  })

  it('shows an error message when fetch throws a network error', async () => {
    // Simulate a network failure (no internet connection etc.)
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.reject(new Error('Network error'))),
    )

    render(<GetInTouchForm />)
    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    await waitFor(() => {
      expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument()
    })
  })
})
