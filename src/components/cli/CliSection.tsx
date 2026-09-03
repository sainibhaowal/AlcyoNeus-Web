"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CopyButton } from "@/components/ui/CopyButton"

interface CliCommand {
  id: string
  title: string
  command: string
  description: string
  output: string[]
}

const cliCommands: CliCommand[] = [
  {
    id: "graph-create",
    title: "Scaffold Agent Graph",
    command: "alc graph create multi-agent-pipeline --template swarm",
    description: "Initialize an enterprise multi-agent workflow from prebuilt battle-tested templates.",
    output: [
      "✨ Initializing project 'multi-agent-pipeline'...",
      "✔ Template 'swarm' selected (SwarmAgent + dynamic handoff router)",
      "✔ Generated multi-agent-pipeline/graph.py",
      "✔ Generated multi-agent-pipeline/config.yaml",
      "✔ Configured InMemoryCheckpointer & OpenTelemetry spans",
      "🚀 Graph scaffolded successfully! Run with: alc graph run graph.py",
    ],
  },
  {
    id: "graph-visualize",
    title: "Graph Visualizer",
    command: "alc graph visualize graph.py --format html --output graph.html",
    description: "Export full state-graph diagrams to interactive HTML, Mermaid, or Graphviz formats.",
    output: [
      "🔍 Inspecting graph.py for nodes, edges, and conditional branches...",
      "  ├── Node 'triage' (Agent: Claude 3.5 Sonnet)",
      "  ├── Node 'research' (Agent: Gemini 2.5 Flash)",
      "  ├── Node 'tools' (ToolNode: 8 tools loaded)",
      "  └── Edges: 6 directed, 2 conditional",
      "📊 Compiling visual representation [format=html]...",
      "✔ Rendered interactive graph to graph.html (ready for browser preview)",
    ],
  },
  {
    id: "tool-test",
    title: "Test Tools Live",
    command: "alc tool test google_web_search --args '{\"query\": \"Alcyoneus OS v1.1.0\"}'",
    description: "Dry-run and inspect any of the 50+ built-in or custom tools directly from the command line.",
    output: [
      "🔧 Resolving tool 'google_web_search' from prebuilt registry...",
      "⚡ Invoking with args: {\"query\": \"Alcyoneus OS v1.1.0\"}",
      "✔ Received 5 parsed search results in 184ms",
      "  [1] Alcyoneus OS - Production-Grade Multi-Agent State-Graph SDK",
      "  [2] PyPI: https://pypi.org/project/alcyoneus/ (v1.1.0)",
      "  [3] GitHub: sainibhaowal/Alcyoneus-OS (3,230+ tests passing)",
      "✔ Tool execution verified with exit code 0",
    ],
  },
  {
    id: "debug-replay",
    title: "Replay Traces & State",
    command: "alc debug replay graph.py --checkpoint session_42_checkpoint.json",
    description: "Step backward through historical execution checkpoints and debug edge transitions with zero guesswork.",
    output: [
      "📂 Loading checkpoint state from session_42_checkpoint.json...",
      "⏱ Checkpoint timestamp: 2026-09-03T19:42:10Z | Thread: session-42",
      "▶ Replaying state transition: Node 'agent' -> Node 'tools'",
      "  Input message: 'What is our Q3 inventory balance?'",
      "  Tool called: safe_calculator(expr='14200 * 0.85')",
      "  Output state verified: memory compaction delta = 0 errors",
      "✔ Replay matched production trajectory with 100% fidelity",
    ],
  },
  {
    id: "deploy-docker",
    title: "Production Deployment",
    command: "alc deploy docker --tag alcyoneus/agent-service:v1.1.0",
    description: "Package agent graphs into micro-VM sandboxes or containerized OCI images ready for Kubernetes.",
    output: [
      "🐳 Building OCI container image for Alcyoneus agent runtime...",
      "  ├── Base: python:3.12-slim-bookworm",
      "  ├── Installed: alcyoneus[pg_checkpoint,mcp,qdrant]==1.1.0",
      "  ├── Hardened: non-root user, read-only rootfs, RBAC policy loaded",
      "  └── ASGI entrypoint: alcyoneus.runtime.protocols.a2a:app",
      "✔ Successfully built alcyoneus/agent-service:v1.1.0",
      "🚀 Ready to deploy via 'alc deploy helm' or 'alc deploy k8s'",
    ],
  },
]

export const CliSection = () => {
  const [selectedId, setSelectedId] = useState(cliCommands[0].id)
  const selectedCommand = cliCommands.find((c) => c.id === selectedId) || cliCommands[0]

  return (
    <section id="cli" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-transparent via-[hsl(var(--card)/0.4)] to-transparent">
      {/* Glow orb */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] rounded-full bg-[hsl(173_80%_40%)] opacity-[0.03] blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--primary))] mb-4">
            Developer Experience
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
            The <span className="text-gradient">alc CLI</span> Power Tool
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto text-lg leading-relaxed">
            Manage your agent lifecycle with a single unified CLI. Scaffold state graphs,
            render visual diagrams, replay checkpoints, and deploy with confidence.
          </p>
        </div>

        {/* CLI Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Command list menu */}
          <div className="lg:col-span-5 space-y-3">
            {cliCommands.map((item) => {
              const isSelected = item.id === selectedId
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${
                    isSelected
                      ? "glass-strong border-[hsl(var(--primary)/0.4)] glow-primary shadow-lg shadow-[hsl(var(--primary)/0.1)]"
                      : "glass border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.2)] hover:bg-[hsl(var(--accent)/0.5)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-display font-semibold text-base text-[hsl(var(--foreground))]">
                      {item.title}
                    </span>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-[hsl(var(--primary)/0.2)] text-[hsl(var(--primary))]"
                          : "text-[hsl(var(--muted-foreground))]"
                      }`}
                    >
                      alc
                    </span>
                  </div>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {item.description}
                  </p>
                </button>
              )
            })}

            <div className="pt-4">
              <div className="p-4 rounded-xl glass border border-[hsl(var(--border))] flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-[hsl(var(--foreground))]">Install CLI Extras</div>
                  <div className="text-[11px] font-mono text-[hsl(var(--muted-foreground))]">pip install &quot;alcyoneus[cli]&quot;</div>
                </div>
                <CopyButton text='pip install "alcyoneus[cli]"' ariaLabel="Copy CLI install command" />
              </div>
            </div>
          </div>

          {/* Terminal window preview */}
          <div className="lg:col-span-7">
            <div className="glass rounded-2xl overflow-hidden glow-primary border border-[hsl(var(--border))] shadow-2xl shadow-black/40">
              {/* Terminal top chrome */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[hsl(var(--border))] bg-black/40">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs font-mono text-[hsl(var(--muted-foreground))] ml-2">
                    bash — 80x24
                  </span>
                </div>
                <CopyButton text={selectedCommand.command} ariaLabel="Copy command" />
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-xs sm:text-sm bg-black/70 min-h-[320px] flex flex-col justify-between">
                <div>
                  {/* Command input prompt */}
                  <div className="flex items-center gap-2 text-[hsl(var(--foreground))] mb-5 pb-3 border-b border-white/5">
                    <span className="text-[hsl(var(--primary))] font-bold">$</span>
                    <span className="text-emerald-400 font-semibold">{selectedCommand.command}</span>
                  </div>

                  {/* Simulated output lines */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedCommand.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2 text-[hsl(var(--muted-foreground))]"
                    >
                      {selectedCommand.output.map((line, idx) => (
                        <div
                          key={idx}
                          className={`${
                            line.startsWith("✔") || line.startsWith("🚀")
                              ? "text-emerald-400 font-medium"
                              : line.startsWith("✨") || line.startsWith("⚡")
                              ? "text-[hsl(var(--primary))] font-medium"
                              : line.startsWith("📊") || line.startsWith("🔍")
                              ? "text-sky-300"
                              : ""
                          }`}
                        >
                          {line}
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[hsl(var(--muted-foreground))]">
                  <span>Status: Ready</span>
                  <span>Exit Code: 0 (OK)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
