"use client"

import { motion } from "framer-motion"

interface DocCard {
  title: string
  category: string
  description: string
  file: string
  url: string
}

const docsList: DocCard[] = [
  {
    title: "Quickstart",
    category: "Getting Started",
    description: "Build, compile, and run your first stateful AI agent graph in 5 minutes.",
    file: "docs/QUICKSTART.md",
    url: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/QUICKSTART.md",
  },
  {
    title: "Core Patterns",
    category: "Architecture",
    description: "StateGraph, nodes, cyclic edges, conditional routing, and Command(goto=...).",
    file: "docs/CORE_PATTERNS.md",
    url: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/CORE_PATTERNS.md",
  },
  {
    title: "Prebuilt Agents",
    category: "Agent Library",
    description: "ReactAgent, RAGAgent, SwarmAgent, SupervisorTeamAgent, and AudioAgent.",
    file: "docs/PREBUILT_AGENTS.md",
    url: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/PREBUILT_AGENTS.md",
  },
  {
    title: "50+ Tools Guide",
    category: "Tool Registry",
    description: "Multi-search (7 providers), browser automation, sandboxed shell, and code interpreter.",
    file: "docs/TOOLS.md",
    url: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/TOOLS.md",
  },
  {
    title: "Persistence & Memory",
    category: "Data Layer",
    description: "Postgres + Redis checkpointing, QdrantStore, Mem0Store, and dynamic compaction.",
    file: "docs/PERSISTENCE.md",
    url: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/PERSISTENCE.md",
  },
  {
    title: "Streaming & Events",
    category: "Realtime",
    description: "15 streaming event types, SSE heartbeat keep-alives, and low-latency chunking.",
    file: "docs/STREAMING.md",
    url: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/STREAMING.md",
  },
  {
    title: "Security & Guardrails",
    category: "Enterprise",
    description: "9-priority RBAC policy engine, input/output guardrails, JWT/mTLS, and secret vaults.",
    file: "docs/SECURITY.md",
    url: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/SECURITY.md",
  },
  {
    title: "Protocols (MCP & A2A)",
    category: "Standards",
    description: "Model Context Protocol (Stdio/SSE/WS), Agent-to-Agent server, and ACP delegation.",
    file: "docs/PROTOCOLS.md",
    url: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/PROTOCOLS.md",
  },
  {
    title: "Testing Framework",
    category: "Quality",
    description: "QuickTest one-liners, TestAgent simulation, MockLLM, and isolated test contexts.",
    file: "docs/TESTING.md",
    url: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/TESTING.md",
  },
  {
    title: "Evaluation & CI",
    category: "Quality",
    description: "LLM-as-judge criteria, trajectory matching, hallucination detection, and simulators.",
    file: "docs/EVALUATION.md",
    url: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/EVALUATION.md",
  },
  {
    title: "All Imports Reference",
    category: "Reference",
    description: "Complete index of all classes, decorators, constants, and utilities in alcyoneus.",
    file: "docs/IMPORTS.md",
    url: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/IMPORTS.md",
  },
  {
    title: "Common Gotchas & Fixes",
    category: "Troubleshooting",
    description: "Solutions for recursion limits, checkpoint deserialization, and multi-tenant scoping.",
    file: "docs/GOTCHAS.md",
    url: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/GOTCHAS.md",
  },
]

export const DocsMatrix = () => {
  return (
    <section id="docs" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[hsl(var(--primary))] opacity-[0.025] blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--primary))] mb-4">
            Documentation Hub
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
            Comprehensive <span className="text-gradient">Technical Guides</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto text-lg leading-relaxed">
            Over 17 in-depth production guides, architecture specifications, and complete API references.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {docsList.map((doc) => (
            <a
              key={doc.file}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl glass hover:bg-[hsl(var(--accent))] transition-all duration-300 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.3)] hover:glow-primary flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]">
                    {doc.category}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-[hsl(var(--muted-foreground))] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-base text-[hsl(var(--foreground))] mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
                  {doc.title}
                </h3>
                <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-2">
                  {doc.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[hsl(var(--border)/0.5)] flex items-center justify-between text-[11px] font-mono text-[hsl(var(--muted-foreground))]">
                <span className="truncate">{doc.file}</span>
                <span className="text-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
              </div>
            </a>
          ))}
        </div>

        {/* Docs banner callout */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            <span>Browse the complete documentation library on GitHub</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
