"use client"

import { cn } from "@/lib/cn"
import { motion } from "framer-motion"

const features = [
  {
    title: "StateGraph Engine",
    description:
      "LangGraph-inspired cyclic workflow engine with nodes, edges, dynamic routing via Command(goto=...), conditional branches, and subgraphs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/CORE_PATTERNS.md",
  },
  {
    title: "9 Prebuilt Agents & Swarms",
    description:
      "ReactAgent, RAGAgent, SwarmAgent, SupervisorTeamAgent, PlanActReflectAgent, StructuredOutputAgent, and AudioAgent ready out of the box.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/PREBUILT_AGENTS.md",
  },
  {
    title: "Realtime Audio & Voice",
    description:
      "Gemini Live, OpenAI Realtime, Local Whisper+TTS with audio barge-in interruption, transcript persistence, and SIP telephony integration.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 1.5a3 3 0 00-3 3v6a3 3 0 006 0v-6a3 3 0 00-3-3z" />
      </svg>
    ),
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/examples/realtime",
  },
  {
    title: "Sandboxing & Computer Use",
    description:
      "8+ isolated backends (Docker, K8s, Firecracker micro-VMs, Daytona, E2B, Modal) with GUI Computer Use (X11/Wayland/VNC/WebRTC).",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/alcyoneus/sandbox",
  },
  {
    title: "Open Protocols (MCP / A2A / ACP)",
    description:
      "Model Context Protocol with Stdio/SSE/WebSocket transports, Starlette-based A2A server with agent cards, and ACP discovery.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/PROTOCOLS.md",
  },
  {
    title: "50+ Built-in Tools",
    description:
      "Search (7 providers + deduplication), browser automation, code interpreter, file I/O, image generation (DALL-E/Imagen/SDXL), and calendar tools.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.65 5.65a2.1 2.1 0 01-2.97-2.97l5.65-5.65m2.97 2.97l5.65-5.65a2.1 2.1 0 00-2.97-2.97l-5.65 5.65m2.97 2.97L15.17 11.42" />
      </svg>
    ),
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/TOOLS.md",
  },
  {
    title: "3-Layer Persistence & Memory",
    description:
      "In-memory state, Postgres + Redis checkpointers, QdrantStore, Mem0Store, and dynamic compaction policies for zero context overflow.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/PERSISTENCE.md",
  },
  {
    title: "Enterprise Policy & Security",
    description:
      "9-priority RBAC engine (allow/deny/ask_user), input/output guardrails with tripwire triggers, JWT/mTLS auth, and Vault secrets fallback.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/SECURITY.md",
  },
  {
    title: "alc CLI & Observability",
    description:
      "Unified CLI for scaffolding, HTML/Mermaid graph visualization, replay debugging, OpenTelemetry auto-spans, and 15+ Prometheus metrics.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 3-3 3m4.5 0h4.5m-10.5 6h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 5.25v13.5A1.5 1.5 0 003.75 20.25z" />
      </svg>
    ),
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/blob/main/docs/CONFIGURATION.md",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const Features = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[hsl(var(--primary))] opacity-[0.03] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--primary))] mb-4">
            Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
            Production-Ready{" "}
            <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto text-lg leading-relaxed">
            Everything you need to build, deploy, and scale intelligent agent
            systems — 17 production-hardening phases complete.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.a
              key={feature.title}
              variants={item}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl glass p-7 hover:bg-[hsl(var(--accent))] transition-all duration-300 hover:glow-primary block"
            >
              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-[hsl(var(--primary)/0.3)]" />

              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-[hsl(var(--primary)/0.1)] flex items-center justify-center mb-5 text-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary)/0.15)] transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-[hsl(var(--foreground))]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {feature.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs text-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View docs
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}