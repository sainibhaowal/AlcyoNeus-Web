"use client"

import { cn } from "@/lib/cn"
import { motion } from "framer-motion"
import { CopyButton } from "@/components/ui/CopyButton"

const quickstartCode = `from alcyoneus.core import StateGraph, Agent, ToolNode
from alcyoneus.storage.checkpointer import InMemoryCheckpointer

graph = StateGraph()
graph.add_node("agent", Agent(model="gemini/gemini-2.5-flash", tool_node="tools"))
graph.add_node("tools", ToolNode([get_weather]))
graph.add_edge("agent", "tools")
graph.set_entry_point("agent")

compiled = graph.compile(checkpointer=InMemoryCheckpointer())
result = compiled.invoke({"messages": [{"role": "user", "content": "Weather in NYC?"}]})`

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[hsl(var(--primary))] opacity-[0.04] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(173_80%_50%)] opacity-[0.03] blur-[100px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        {/* Announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <a
            href="https://github.com/sainibhaowal/Alcyoneus-OS/releases/tag/v1.1.0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm hover:bg-[hsl(var(--accent))] transition-colors duration-200"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
            <span className="text-[hsl(var(--muted-foreground))]">
              v1.1.0 Released — Production-Grade Agent Framework
            </span>
            <svg className="w-4 h-4 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-[1.05] mb-8"
        >
          <span className="block">Build Intelligent</span>
          <span className="block text-gradient">Agent Systems</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-lg sm:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Production-grade Python framework for building, orchestrating, and deploying
          multi-agent LLM systems with 100+ ready-to-use capabilities. Open-source, Apache 2.0 Licensed.
        </motion.p>

        {/* Quick install pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl glass border border-[hsl(var(--border))] glow-primary">
            <span className="text-[hsl(var(--primary))] font-mono text-sm">$</span>
            <code className="font-mono text-sm text-[hsl(var(--foreground))]">pip install alcyoneus</code>
            <CopyButton text="pip install alcyoneus" ariaLabel="Copy install command" />
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <a
            href="#get-started"
            className="group relative px-8 py-4 rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold text-base hover:brightness-110 transition-all duration-300 glow-primary-strong"
          >
            Get Started
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="https://github.com/sainibhaowal/Alcyoneus-OS"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl glass text-[hsl(var(--foreground))] font-semibold text-base hover:bg-[hsl(var(--accent))] transition-all duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </motion.div>

        {/* Code snippet preview — Real quickstart from README */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl overflow-hidden glow-primary">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[hsl(var(--border))]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-[hsl(var(--muted-foreground))] ml-2 font-mono">quickstart.py</span>
              </div>
              <CopyButton text={quickstartCode} ariaLabel="Copy quickstart code" />
            </div>
            {/* Code — Real example from Alcyoneus-OS README */}
            <div className="px-5 py-5 font-mono text-sm leading-relaxed">
              <div className="text-[hsl(var(--muted-foreground))]">
                <span className="text-[hsl(173_80%_60%)]">from</span>{" "}
                <span className="text-[hsl(var(--foreground))]">alcyoneus.core</span>{" "}
                <span className="text-[hsl(173_80%_60%)]">import</span>{" "}
                <span className="text-[hsl(var(--foreground))]">StateGraph, Agent, ToolNode</span>
              </div>
              <div className="mt-1 text-[hsl(var(--muted-foreground))]">
                <span className="text-[hsl(173_80%_60%)]">from</span>{" "}
                <span className="text-[hsl(var(--foreground))]">alcyoneus.storage.checkpointer</span>{" "}
                <span className="text-[hsl(173_80%_60%)]">import</span>{" "}
                <span className="text-[hsl(var(--foreground))]">InMemoryCheckpointer</span>
              </div>
              <div className="mt-3 text-[hsl(var(--muted-foreground))]">
                <span className="text-[hsl(var(--foreground))]">graph</span>{" "}
                <span className="text-[hsl(var(--primary))]">=</span>{" "}
                <span className="text-[hsl(var(--foreground))]">StateGraph</span>
                <span className="text-[hsl(var(--muted-foreground))]">()</span>
              </div>
              <div className="mt-1 text-[hsl(var(--muted-foreground))]">
                <span className="text-[hsl(var(--foreground))]">graph</span>
                <span>.</span>
                <span className="text-[hsl(173_80%_60%)]">add_node</span>
                <span>(</span>
                <span className="text-[hsl(43_96%_56%)]">&quot;agent&quot;</span>
                <span>, Agent(model=</span>
                <span className="text-[hsl(43_96%_56%)]">&quot;gemini/gemini-2.5-flash&quot;</span>
                <span>, tool_node=</span>
                <span className="text-[hsl(43_96%_56%)]">&quot;tools&quot;</span>
                <span>))</span>
              </div>
              <div className="mt-1 text-[hsl(var(--muted-foreground))]">
                <span className="text-[hsl(var(--foreground))]">graph</span>
                <span>.</span>
                <span className="text-[hsl(173_80%_60%)]">add_node</span>
                <span>(</span>
                <span className="text-[hsl(43_96%_56%)]">&quot;tools&quot;</span>
                <span>, ToolNode([get_weather]))</span>
              </div>
              <div className="mt-1 text-[hsl(var(--muted-foreground))]">
                <span className="text-[hsl(var(--foreground))]">graph</span>
                <span>.</span>
                <span className="text-[hsl(173_80%_60%)]">add_edge</span>
                <span>(</span>
                <span className="text-[hsl(43_96%_56%)]">&quot;agent&quot;</span>
                <span>, </span>
                <span className="text-[hsl(43_96%_56%)]">&quot;tools&quot;</span>
                <span>)</span>
              </div>
              <div className="mt-1 text-[hsl(var(--muted-foreground))]">
                <span className="text-[hsl(var(--foreground))]">graph</span>
                <span>.</span>
                <span className="text-[hsl(173_80%_60%)]">set_entry_point</span>
                <span>(</span>
                <span className="text-[hsl(43_96%_56%)]">&quot;agent&quot;</span>
                <span>)</span>
              </div>
              <div className="mt-3 text-[hsl(var(--muted-foreground))]">
                <span className="text-[hsl(var(--foreground))]">compiled</span>{" "}
                <span className="text-[hsl(var(--primary))]">=</span>{" "}
                <span className="text-[hsl(var(--foreground))]">graph</span>
                <span>.</span>
                <span className="text-[hsl(173_80%_60%)]">compile</span>
                <span>(checkpointer</span>
                <span className="text-[hsl(var(--primary))]">=</span>
                <span>InMemoryCheckpointer())</span>
              </div>
              <div className="mt-1 text-[hsl(var(--muted-foreground))]">
                <span className="text-[hsl(var(--foreground))]">result</span>{" "}
                <span className="text-[hsl(var(--primary))]">=</span>{" "}
                <span className="text-[hsl(var(--foreground))]">compiled</span>
                <span>.</span>
                <span className="text-[hsl(173_80%_60%)]">invoke</span>
                <span>(&#123;&quot;messages&quot;: [&#123;&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;Weather in NYC?&quot;&#125;]&#125;)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats bar — Real data from README & GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mt-16"
        >
          {[
            { value: "100+", label: "Capabilities" },
            { value: "50+", label: "Built-in Tools" },
            { value: "3,230+", label: "Tests Passing" },
            { value: "3.12 | 3.13", label: "Python Support" },
            { value: "17 Phases", label: "Hardened" },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-2">
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}