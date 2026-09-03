"use client"

import { cn } from "@/lib/cn"
import Link from "next/link"
import { useState, useEffect } from "react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Showcase", href: "#showcase" },
  { label: "CLI", href: "#cli" },
  { label: "Docs", href: "#docs" },
  { label: "PyPI", href: "https://pypi.org/project/alcyoneus/", external: true },
]

export const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/alcyoneus-mark-transparent.svg"
              alt="Alcyoneus OS Mark"
              className="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-display font-bold tracking-wide">
              Alcyoneus
            </span>
            <span className="text-xs font-medium text-[hsl(var(--muted-foreground))] uppercase tracking-widest">
              OS
            </span>
            <span className="ml-1.5 px-2 py-0.5 text-[11px] font-mono font-medium rounded-md bg-[hsl(var(--primary)/0.12)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.25)]">
              v1.1.0
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="relative px-4 py-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200 rounded-lg hover:bg-[hsl(var(--accent))]"
            >
              {link.label}
            </a>
          ))}
          <div className="w-px h-6 bg-[hsl(var(--border))] mx-2" />
          <a
            href="https://github.com/sainibhaowal/Alcyoneus-OS"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200 rounded-lg hover:bg-[hsl(var(--accent))] inline-flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="#get-started"
            className="ml-2 px-5 py-2 text-sm font-medium rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:brightness-110 transition-all duration-200 glow-primary"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[hsl(var(--accent))] transition-colors"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 bg-[hsl(var(--foreground))] transition-all duration-300",
                open && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-[hsl(var(--foreground))] transition-all duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-[hsl(var(--foreground))] transition-all duration-300",
                open && "-rotate-45 -translate-y-2"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 transition-all duration-500",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-[hsl(var(--background))]/95 backdrop-blur-2xl" />
        <div className="relative flex flex-col items-center justify-center h-full gap-6 pt-20">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={() => setOpen(false)}
              className={cn(
                "text-2xl font-display font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-all duration-300",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: `${(i + 1) * 75}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/sainibhaowal/Alcyoneus-OS"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={cn(
              "text-2xl font-display font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-all duration-300",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            style={{ transitionDelay: `${(navLinks.length + 1) * 75}ms` }}
          >
            GitHub
          </a>
          <div className="w-12 h-px bg-[hsl(var(--border))] my-2" />
          <a
            href="#get-started"
            onClick={() => setOpen(false)}
            className="px-8 py-3 text-lg font-medium rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] glow-primary-strong"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}