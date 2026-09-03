import { describe, it, expect } from 'vitest'
import { cn } from '../cn'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    expect(cn('px-2 py-1', 'bg-blue-500')).toBe('px-2 py-1 bg-blue-500')
  })

  it('handles conditional classes', () => {
    expect(cn('base-class', false && 'hidden', 'visible')).toBe('base-class visible')
  })

  it('resolves tailwind merge conflicts', () => {
    expect(cn('p-4', 'p-8')).toBe('p-8')
  })
})
