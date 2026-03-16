import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    // Use jsdom to simulate a browser environment
    environment: 'jsdom',
    // Make Vitest globals (describe, it, expect, vi) available without importing
    globals: true,
    // Run this file before each test suite to set up custom matchers etc.
    setupFiles: ['./vitest.setup.ts'],
    // Don't run tests inside .next or node_modules
    exclude: ['node_modules', '.next'],
  },
  resolve: {
    alias: {
      // Mirror the @ path alias from tsconfig.json
      '@': resolve(import.meta.dirname, '.'),
    },
  },
})
