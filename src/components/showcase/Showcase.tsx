"use client"

import { cn } from "@/lib/cn"
import { motion } from "framer-motion"

const showcaseItems = [
  {
    title: "StateGraph + ReAct Agent",
    description:
      "Build a complete agent with weather tools, conditional routing, and persistence — the real quickstart example from the Alcyoneus OS repository.",
    tags: ["StateGraph", "Agent", "ToolNode", "Checkpointer"],
    gradient: "from-[hsl(var(--primary))] to-[hsl(173_80%_50%)]",
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/examples/react",
  },
  {
    title: "MCP Protocol Integration",
    description:
      "Model Context Protocol support with Stdio, SSE, and WebSocket transports, capability negotiation, and 5-minute tool cache.",
    tags: ["MCP", "Stdio", "SSE", "WebSocket"],
    gradient: "from-[hsl(173_80%_50%)] to-[hsl(197_75%_55%)]",
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/examples/react-mcp",
  },
  {
    title: "Realtime Audio Agents",
    description:
      "Real-time audio-to-audio agents using Gemini Live, OpenAI Realtime, Azure, and Local Whisper+TTS with barge-in and transcript persistence.",
    tags: ["AudioAgent", "Gemini Live", "OpenAI Realtime", "Whisper"],
    gradient: "from-[hsl(197_75%_55%)] to-[hsl(43_96%_56%)]",
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/examples/realtime",
  },
  {
    title: "Multi-Agent Swarm",
    description:
      "Dynamic multi-agent collaboration with SwarmAgent, shared memory, message passing, hierarchical delegation, and handoff tools.",
    tags: ["SwarmAgent", "Handoff", "Collaboration"],
    gradient: "from-[hsl(43_96%_56%)] to-[hsl(27_87%_60%)]",
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/examples/swarm",
  },
  {
    title: "RAG + Vector Stores",
    description:
      "Retrieval-augmented generation with QdrantStore, Mem0Store, memory tools, and dynamic compaction policies for context management.",
    tags: ["RAGAgent", "Qdrant", "Mem0", "Memory"],
    gradient: "from-[hsl(27_87%_60%)] to-[hsl(var(--primary))]",
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/examples/rag",
  },
  {
    title: "Sandboxed Execution",
    description:
      "Run code safely in Docker, Kubernetes, Firecracker micro-VMs, or local PTY — with GPU passthrough, resource limits, and policy-guarded shell access.",
    tags: ["Docker", "K8s", "Firecracker", "ShellTool"],
    gradient: "from-[hsl(var(--primary))] to-[hsl(173_80%_50%)]",
    link: "https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/alcyoneus/sandbox",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const Showcase = () => {
  return (
    <section id="showcase" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(173_80%_50%)] opacity-[0.03] blur-[120px]" />

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
            Showcase
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
            Real{" "}
            <span className="text-gradient">Examples & Capabilities</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto text-lg leading-relaxed">
            Explore production-ready examples and subsystems from the{" "}
            <a
              href="https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/examples"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(var(--primary))] hover:underline"
            >
              Alcyoneus OS repository
            </a>.
          </p>
        </motion.div>

        {/* Showcase cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {showcaseItems.map((showcase) => (
            <motion.a
              key={showcase.title}
              variants={item}
              href={showcase.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl glass overflow-hidden transition-all duration-500 hover:glow-primary block"
            >
              {/* Top gradient bar */}
              <div
                className={cn(
                  "h-1 w-full bg-gradient-to-r opacity-60 group-hover:opacity-100 transition-opacity duration-500",
                  showcase.gradient
                )}
              />

              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-semibold text-xl text-[hsl(var(--foreground))]">
                    {showcase.title}
                  </h3>
                  <svg
                    className="w-4 h-4 text-[hsl(var(--muted-foreground))] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-5">
                  {showcase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {showcase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}