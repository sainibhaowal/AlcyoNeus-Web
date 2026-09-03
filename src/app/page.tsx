import { Hero } from "@/components/hero/Hero"
import { Features } from "@/components/features/Features"
import { CodeExplorer } from "@/components/explorer/CodeExplorer"
import { CliSection } from "@/components/cli/CliSection"
import { Showcase } from "@/components/showcase/Showcase"
import { DocsMatrix } from "@/components/docs/DocsMatrix"
import { CopyButton } from "@/components/ui/CopyButton"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />

      <Features />

      <CodeExplorer />

      <CliSection />

      <Showcase />

      <DocsMatrix />

      {/* CTA Section */}
      <section id="get-started" className="relative py-24 md:py-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[hsl(var(--primary))] opacity-[0.05] blur-[150px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--primary))] mb-4">
            Get Started
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
            Start Building{" "}
            <span className="text-gradient">Today</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Install the framework in seconds and start building intelligent
            agents with 100+ production-grade capabilities.
          </p>

          {/* Install command */}
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl glass glow-primary mb-8">
            <span className="text-[hsl(var(--primary))] font-mono text-sm">$</span>
            <code className="font-mono text-base text-[hsl(var(--foreground))]">
              pip install alcyoneus
            </code>
            <CopyButton text="pip install alcyoneus" ariaLabel="Copy install command" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:brightness-110 transition-all duration-300 glow-primary-strong inline-flex items-center gap-2"
            >
              View Documentation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a
              href="https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/QUICKSTART.md"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl glass text-[hsl(var(--foreground))] font-semibold hover:bg-[hsl(var(--accent))] transition-all duration-300 inline-flex items-center gap-2"
            >
              Quickstart Guide
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}