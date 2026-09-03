import { cn } from "@/lib/cn"
import Link from "next/link"

const footerLinks = {
  Project: [
    { label: "Features", href: "#features" },
    { label: "Architecture", href: "#architecture" },
    { label: "CLI & Tooling", href: "#cli" },
    { label: "Showcase", href: "#showcase" },
    { label: "Release v1.1.0", href: "https://github.com/sainibhaowal/Alcyoneus-OS/releases/tag/v1.1.0", external: true },
    { label: "Changelog", href: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/CHANGELOG.md", external: true },
  ],
  Developers: [
    { label: "Documentation Hub", href: "#docs" },
    { label: "Quickstart Guide", href: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/QUICKSTART.md", external: true },
    { label: "All Imports Index", href: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/IMPORTS.md", external: true },
    { label: "Examples Repository", href: "https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/examples", external: true },
    { label: "Testing Guide", href: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/TESTING.md", external: true },
  ],
  Subsystems: [
    { label: "StateGraph Engine", href: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/CORE_PATTERNS.md", external: true },
    { label: "Realtime Audio & Voice", href: "https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/examples/realtime", external: true },
    { label: "Protocols (MCP/A2A)", href: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/PROTOCOLS.md", external: true },
    { label: "Sandboxing & Isolation", href: "https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/alcyoneus/sandbox", external: true },
    { label: "Security & Guardrails", href: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/SECURITY.md", external: true },
  ],
  Resources: [
    { label: "GitHub Repository", href: "https://github.com/sainibhaowal/Alcyoneus-OS", external: true },
    { label: "PyPI Package", href: "https://pypi.org/project/alcyoneus/", external: true },
    { label: "License (MIT)", href: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/LICENSE", external: true },
    { label: "Security Policy", href: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/SECURITY.md", external: true },
  ],
}

export const Footer = () => {
  return (
    <footer className="border-t border-[hsl(var(--border))]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="h-8 w-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/alcyoneus-mark-transparent.svg"
                  alt="Alcyoneus OS"
                  className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]"
                />
              </div>
              <span className="font-display font-bold tracking-wide">Alcyoneus OS</span>
            </Link>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed max-w-xs">
              Production-grade Python framework for building intelligent agent
              systems. Open-source, Apache 2.0 Licensed.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://github.com/sainibhaowal/Alcyoneus-OS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://pypi.org/project/alcyoneus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                aria-label="PyPI"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.585 11.692l4.83 2.787 4.83-2.787-4.83-2.788-4.83 2.788zm-1.005.58v5.574l4.83 2.788v-5.574l-4.83-2.788zm6.84 8.362v-5.574l4.83-2.788v5.574l-4.83 2.788zM8.58 4.787L3.75 7.576l4.83 2.788 4.83-2.788-4.83-2.788zm-1.005.58v5.574l4.83 2.787V8.155L7.575 5.367zm6.84 8.362V8.155l4.83-2.788v5.574l-4.83 2.788z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-[hsl(var(--foreground))] mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200 inline-flex items-center gap-1"
                      >
                        {link.label}
                        <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[hsl(var(--border)/0.5)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            © 2026 Alcyoneus OS (v1.1.0). Apache 2.0 Licensed. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              Apache 2.0 License
            </a>
            <a
              href="https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/SECURITY.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}