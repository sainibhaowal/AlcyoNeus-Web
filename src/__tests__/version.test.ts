import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import pkg from '../../package.json'

describe('Alcyoneus Web Configuration & Versioning', () => {
  it('has package version matching web release v0.1.0-web', () => {
    expect(pkg.version).toBe('0.1.0')
  })

  it('contains build:standalone script for VPS deployment', () => {
    expect(pkg.scripts['build:standalone']).toBeDefined()
  })

  it('contains Dockerfile configured for standalone production deployment', () => {
    const dockerfilePath = path.resolve(__dirname, '../../Dockerfile')
    expect(fs.existsSync(dockerfilePath)).toBe(true)
    const content = fs.readFileSync(dockerfilePath, 'utf-8')
    expect(content).toContain('FROM node:20-alpine')
    expect(content).toContain('server.js')
  })

  it('contains docker-compose.yml with production configuration', () => {
    const composePath = path.resolve(__dirname, '../../docker-compose.yml')
    expect(fs.existsSync(composePath)).toBe(true)
    const content = fs.readFileSync(composePath, 'utf-8')
    expect(content).toContain('alcyoneus_web')
    expect(content).toContain('3000:3000')
  })
})
