import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { metadata } from '../app/layout'

describe('Alcyoneus Web Content & System Integration Tests', () => {
  const rootDir = path.resolve(__dirname, '../../')

  describe('Brand Assets & Favicons', () => {
    it('has valid high-resolution SVG mark and banner assets', () => {
      const markSvg = path.join(rootDir, 'public/alcyoneus-mark-transparent.svg')
      const logoSvg = path.join(rootDir, 'public/alcyoneus-logo.svg')
      const banner = path.join(rootDir, 'public/banner.png')
      const faviconIco = path.join(rootDir, 'public/favicon.ico')
      const faviconPng = path.join(rootDir, 'public/favicon.png')

      expect(fs.existsSync(markSvg)).toBe(true)
      expect(fs.existsSync(logoSvg)).toBe(true)
      expect(fs.existsSync(banner)).toBe(true)
      expect(fs.existsSync(faviconIco)).toBe(true)
      expect(fs.existsSync(faviconPng)).toBe(true)

      const svgContent = fs.readFileSync(markSvg, 'utf-8')
      expect(svgContent).toContain('<svg')
      expect(svgContent).toContain('cyber-cyan')
    })
  })

  describe('SEO & Layout Metadata', () => {
    it('exports complete metadata with title, description, icons, and openGraph', () => {
      expect(metadata.title).toContain('Alcyoneus OS')
      expect(metadata.description).toContain('production-ready')
      expect(metadata.metadataBase).toBeDefined()
      expect(metadata.icons).toBeDefined()
      expect(metadata.openGraph).toBeDefined()
      expect(metadata.openGraph?.images).toBeDefined()
    })
  })

  describe('Interactive Subsystem Components', () => {
    it('Features component contains all 9 production capability pillars', () => {
      const featuresPath = path.join(rootDir, 'src/components/features/Features.tsx')
      const content = fs.readFileSync(featuresPath, 'utf-8')
      
      const expectedPillars = [
        'StateGraph Engine',
        '9 Prebuilt Agents & Swarms',
        'Realtime Audio & Voice',
        'Sandboxing & Computer Use',
        'Open Protocols (MCP / A2A / ACP)',
        '50+ Built-in Tools',
        '3-Layer Persistence & Memory',
        'Enterprise Policy & Security',
        'alc CLI & Observability',
      ]

      for (const pillar of expectedPillars) {
        expect(content).toContain(pillar)
      }
    })

    it('CodeExplorer component contains all 5 interactive architecture tabs', () => {
      const explorerPath = path.join(rootDir, 'src/components/explorer/CodeExplorer.tsx')
      const content = fs.readFileSync(explorerPath, 'utf-8')

      expect(content).toContain('StateGraph & ReAct')
      expect(content).toContain('Realtime Voice & Audio')
      expect(content).toContain('Multi-Agent Swarm')
      expect(content).toContain('Functional Workflows')
      expect(content).toContain('alc CLI & Visualizer')
    })

    it('CliSection component specifies alc CLI commands and simulated outputs', () => {
      const cliPath = path.join(rootDir, 'src/components/cli/CliSection.tsx')
      const content = fs.readFileSync(cliPath, 'utf-8')

      expect(content).toContain('alc graph create')
      expect(content).toContain('alc graph visualize')
      expect(content).toContain('alc tool test')
      expect(content).toContain('alc debug replay')
      expect(content).toContain('alc deploy docker')
    })

    it('DocsMatrix component indexes core Alcyoneus OS documentation guides', () => {
      const docsPath = path.join(rootDir, 'src/components/docs/DocsMatrix.tsx')
      const content = fs.readFileSync(docsPath, 'utf-8')

      expect(content).toContain('docs/QUICKSTART.md')
      expect(content).toContain('docs/CORE_PATTERNS.md')
      expect(content).toContain('docs/PREBUILT_AGENTS.md')
      expect(content).toContain('docs/TOOLS.md')
      expect(content).toContain('docs/PERSISTENCE.md')
      expect(content).toContain('docs/STREAMING.md')
      expect(content).toContain('docs/SECURITY.md')
      expect(content).toContain('docs/PROTOCOLS.md')
      expect(content).toContain('docs/TESTING.md')
      expect(content).toContain('docs/EVALUATION.md')
      expect(content).toContain('docs/IMPORTS.md')
      expect(content).toContain('docs/GOTCHAS.md')
    })

    it('Hero component includes quickstart code and install command with copy button', () => {
      const heroPath = path.join(rootDir, 'src/components/hero/Hero.tsx')
      const content = fs.readFileSync(heroPath, 'utf-8')

      expect(content).toContain('pip install alcyoneus')
      expect(content).toContain('quickstart.py')
      expect(content).toContain('CopyButton')
      expect(content).toContain('3,230+')
    })
  })

  describe('Production & VPS Deployment Configuration', () => {
    it('contains Nginx configuration for alcyoneos.faimatrix.com', () => {
      const nginxPath = path.join(rootDir, 'nginx/alcyoneos.faimatrix.com.conf')
      expect(fs.existsSync(nginxPath)).toBe(true)
      const content = fs.readFileSync(nginxPath, 'utf-8')
      expect(content).toContain('server_name alcyoneos.faimatrix.com')
      expect(content).toContain('proxy_pass http://127.0.0.1:3000')
    })

    it('contains docker-compose.prod.yml pulling prebuilt container from GHCR', () => {
      const composeProd = path.join(rootDir, 'docker-compose.prod.yml')
      expect(fs.existsSync(composeProd)).toBe(true)
      const content = fs.readFileSync(composeProd, 'utf-8')
      expect(content).toContain('ghcr.io/sainibhaowal/alcyoneus-web:latest')
      expect(content).toContain('3000:3000')
    })
  })
})
