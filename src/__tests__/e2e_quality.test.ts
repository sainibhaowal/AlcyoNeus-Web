import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { JSDOM } from 'jsdom'

describe('End-to-End Web Quality, A11y, Security & SEO Audit', () => {
  const rootDir = path.resolve(__dirname, '../../')
  const htmlPath = path.join(rootDir, '.next/server/app/index.html')

  // Automatically build production bundle if index.html is not yet generated
  if (!fs.existsSync(htmlPath)) {
    execSync('npm run build', { cwd: rootDir, stdio: 'pipe' })
  }

  const htmlContent = fs.readFileSync(htmlPath, 'utf-8')
  const dom = new JSDOM(htmlContent)
  const document = dom.window.document

  describe('1. Semantic Structure & Heading Hierarchy', () => {
    it('contains exactly one <h1> heading for the main page title', () => {
      const h1s = Array.from(document.querySelectorAll('h1')) as HTMLElement[]
      expect(h1s.length).toBe(1)
      expect(h1s[0].textContent).toContain('Build Intelligent')
    })

    it('contains logical <h2> section headings for all key content blocks', () => {
      const h2s = (Array.from(document.querySelectorAll('h2')) as HTMLElement[]).map((h) => h.textContent?.trim())
      
      expect(h2s.some((t) => t?.includes('Production-Ready'))).toBe(true) // Features
      expect(h2s.some((t) => t?.includes('Engineered for'))).toBe(true) // Architecture
      expect(h2s.some((t) => t?.includes('alc CLI'))).toBe(true) // CLI
      expect(h2s.some((t) => t?.includes('Examples'))).toBe(true) // Showcase
      expect(h2s.some((t) => t?.includes('Technical Guides'))).toBe(true) // Docs
      expect(h2s.some((t) => t?.includes('Start Building'))).toBe(true) // CTA
    })

    it('uses proper semantic layout containers: header, main, footer, nav, sections', () => {
      expect(document.querySelector('header')).not.toBeNull()
      expect(document.querySelector('main')).not.toBeNull()
      expect(document.querySelector('footer')).not.toBeNull()
      expect(document.querySelectorAll('nav').length).toBeGreaterThanOrEqual(1)
      expect(document.querySelectorAll('section').length).toBeGreaterThanOrEqual(5)
    })
  })

  describe('2. Link Health & Internal Hash Routing', () => {
    it('ensures all internal hash links resolve to valid section IDs in the DOM', () => {
      const hashLinks = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[]
      expect(hashLinks.length).toBeGreaterThan(0)

      for (const link of hashLinks) {
        const href = link.getAttribute('href')!
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        expect(targetElement, `Internal link ${href} has no matching ID on page`).not.toBeNull()
      }
    })

    it('ensures all external links have target="_blank" and secure rel="noopener noreferrer"', () => {
      const externalLinks = Array.from(document.querySelectorAll('a[href^="http"]')) as HTMLAnchorElement[]
      expect(externalLinks.length).toBeGreaterThan(0)

      for (const link of externalLinks) {
        const target = link.getAttribute('target')
        const rel = link.getAttribute('rel')

        expect(target, `External link ${link.getAttribute('href')} missing target="_blank"`).toBe('_blank')
        expect(rel, `External link ${link.getAttribute('href')} missing rel="noopener noreferrer"`).toContain('noopener')
        expect(rel).toContain('noreferrer')
      }
    })
  })

  describe('3. Accessibility (a11y) & Usability', () => {
    it('ensures every image has a descriptive, non-empty alt attribute', () => {
      const images = Array.from(document.querySelectorAll('img')) as HTMLImageElement[]
      expect(images.length).toBeGreaterThan(0)

      for (const img of images) {
        const alt = img.getAttribute('alt')
        expect(alt, `Image with src "${img.getAttribute('src')}" is missing alt attribute`).toBeDefined()
        expect(alt?.trim().length).toBeGreaterThan(0)
      }
    })

    it('ensures all interactive buttons have accessible names or aria-labels', () => {
      const buttons = Array.from(document.querySelectorAll('button')) as HTMLButtonElement[]
      expect(buttons.length).toBeGreaterThan(0)

      for (const btn of buttons) {
        const text = btn.textContent?.trim()
        const ariaLabel = btn.getAttribute('aria-label')
        const title = btn.getAttribute('title')
        const hasAccessibleName = (text && text.length > 0) || (ariaLabel && ariaLabel.length > 0) || (title && title.length > 0)

        expect(hasAccessibleName, `Button with HTML "${btn.outerHTML.substring(0, 60)}" is missing accessible name`).toBe(true)
      }
    })
  })

  describe('4. Static Asset Integrity', () => {
    it('ensures all images referenced in the DOM point to existing files in public/', () => {
      const images = Array.from(document.querySelectorAll('img')) as HTMLImageElement[]
      for (const img of images) {
        const src = img.getAttribute('src')
        if (src && src.startsWith('/')) {
          const filePath = path.join(rootDir, 'public', src)
          expect(fs.existsSync(filePath), `Image source "${src}" does not exist in public/`).toBe(true)
        }
      }
    })
  })

  describe('5. SEO & Metadata Verification', () => {
    it('has valid page title and meta description with proper length', () => {
      expect(document.title).toContain('Alcyoneus OS')
      expect(htmlContent).toContain('alcyoneos.faimatrix.com')

      // Check description meta tag in rendered HTML stream
      expect(htmlContent).toContain('name="description"')
      expect(htmlContent).toContain('Build, orchestrate, and deploy multi-agent LLM systems')
    })

    it('has valid viewport meta tag for responsive mobile layout', () => {
      expect(htmlContent).toContain('name="viewport"')
      expect(htmlContent).toContain('width=device-width, initial-scale=1')
    })

    it('has valid OpenGraph and Twitter card tags', () => {
      expect(htmlContent).toContain('property="og:title"')
      expect(htmlContent).toContain('property="og:image"')
      expect(htmlContent).toContain('name="twitter:card"')
    })

    it('links to valid favicon assets in header', () => {
      expect(htmlContent).toContain('rel="icon"')
      expect(htmlContent).toContain('/favicon.ico')
    })
  })

  describe('6. Security & Credential Leak Safeguards', () => {
    it('ensures no private SSH keys or private tokens are leaked in client bundles or HTML', () => {
      expect(htmlContent).not.toContain('BEGIN OPENSSH PRIVATE KEY')
      expect(htmlContent).not.toContain('BEGIN RSA PRIVATE KEY')
      expect(htmlContent).not.toContain('ghp_') // GitHub Personal Access Token
      expect(htmlContent).not.toContain('sk-ant-') // Anthropic API key
      expect(htmlContent).not.toContain('sk-proj-') // OpenAI Project key
    })

    it('ensures no localhost IP addresses are exposed in production metadata', () => {
      expect(htmlContent).not.toContain('"http://localhost:3000"')
    })
  })
})
