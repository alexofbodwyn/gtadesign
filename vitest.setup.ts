/**
 * Vitest global setup file.
 *
 * This runs once before each test file. Importing @testing-library/jest-dom
 * adds extra matchers to `expect()` like:
 *   - toBeInTheDocument()
 *   - toHaveClass()
 *   - toHaveValue()
 *   - toBeDisabled()
 *   - toBeVisible()
 *   ... and many more
 *
 * Without this, you'd only have Vitest's built-in matchers (toBe, toEqual, etc.)
 */
import '@testing-library/jest-dom'
