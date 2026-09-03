"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CopyButton } from "@/components/ui/CopyButton"

interface CodeSnippet {
  id: string
  title: string
  subtitle: string
  badge: string
  filename: string
  code: string
  highlights: string[]
}

const snippets: CodeSnippet[] = [
  {
    id: "stategraph",
    title: "StateGraph & ReAct",
    subtitle: "Deterministic flow with tool loops and checkpointing",
    badge: "Core Engine",
    filename: "graph_agent.py",
    highlights: ["StateGraph", "Agent", "ToolNode", "InMemoryCheckpointer"],
    code: `import alcyoneus as alc
from alcyoneus.core import StateGraph, Agent, ToolNode, START, END
from alcyoneus.storage.checkpointer import InMemoryCheckpointer
from alcyoneus.prebuilt.tools import safe_calculator, google_web_search

# 1. Define custom domain tools
def check_inventory(sku: str) -> dict:
    """Check live warehouse stock for an SKU."""
    return {"sku": sku, "in_stock": True, "warehouse": "us-east-1"}

# 2. Build graph with Agent + ToolNode
graph = StateGraph()
graph.add_node("agent", Agent(model="gemini/gemini-2.5-flash", tool_node="tools"))
graph.add_node("tools", ToolNode([check_inventory, safe_calculator, google_web_search]))

# 3. Add cyclic execution edges
graph.add_edge("agent", "tools")
graph.add_edge("tools", "agent")
graph.set_entry_point("agent")

# 4. Compile with persistence
compiled = graph.compile(checkpointer=InMemoryCheckpointer())

# 5. Run stateful invocation
result = compiled.invoke(
    {"messages": [{"role": "user", "content": "Check stock for SKU-9821 and calculate tax at 8.5%"}]},
    config={"thread_id": "session-42"}
)`,
  },
  {
    id: "realtime",
    title: "Realtime Voice & Audio",
    subtitle: "Gemini Live & OpenAI Realtime with barge-in interruption",
    badge: "Realtime Audio",
    filename: "audio_agent.py",
    highlights: ["AudioAgent", "GeminiLiveProvider", "Barge-in Support"],
    code: `import asyncio
from alcyoneus.core.realtime import AudioAgent
from alcyoneus.core.realtime.providers import GeminiLiveProvider, OpenAIRealtimeProvider
from alcyoneus.prebuilt.tools import google_web_search

async def main():
    # Initialize real-time audio agent with Gemini Live or OpenAI Realtime
    agent = AudioAgent(
        provider=GeminiLiveProvider(
            model="gemini-2.5-flash",
            voice="Aoede",
            enable_barge_in=True,  # Seamless user speech interruption
        ),
        tools=[google_web_search],
        system_prompt="You are a real-time voice support assistant. Keep answers natural and concise."
    )

    # Connect duplex audio stream (mic input -> speaker output)
    async with agent.connect() as session:
        print("🎙️ Listening... speak into your microphone.")
        await session.stream_duplex()

if __name__ == "__main__":
    asyncio.run(main())`,
  },
  {
    id: "swarm",
    title: "Multi-Agent Swarm",
    subtitle: "Dynamic delegation, agent handoffs, and shared context",
    badge: "Multi-Agent",
    filename: "swarm_orchestrator.py",
    highlights: ["SwarmAgent", "create_handoff_tool", "Dynamic Handoff"],
    code: `from alcyoneus.core import StateGraph
from alcyoneus.prebuilt.agent import SwarmAgent
from alcyoneus.prebuilt.tools import create_handoff_tool, shell_command

# Define specialized peer agents
triage_agent = SwarmAgent(
    name="TriageAgent",
    model="anthropic/claude-3-5-sonnet",
    instructions="Analyze the ticket and hand off to DevOps or Support."
)

devops_agent = SwarmAgent(
    name="DevOpsAgent",
    model="openai/gpt-4o",
    instructions="Resolve infrastructure incidents using shell tools.",
    tools=[shell_command]
)

# Connect agents via bi-directional handoff tools
triage_agent.add_tool(create_handoff_tool(target=devops_agent))
devops_agent.add_tool(create_handoff_tool(target=triage_agent))

# Execute collaborative swarm
swarm = SwarmAgent.compose([triage_agent, devops_agent])
response = swarm.invoke(
    "High CPU alert on pod cluster-east-2. Investigate container metrics."
)`,
  },
  {
    id: "functional",
    title: "Functional Workflows",
    subtitle: "Durable Python execution with @entrypoint and @task",
    badge: "Functional SDK",
    filename: "durable_workflow.py",
    highlights: ["@entrypoint", "@task", "TaskWorkflow"],
    code: `from alcyoneus.func import entrypoint, task, TaskWorkflow

@task
def fetch_market_data(symbol: str) -> dict:
    """Fetch live ticker and volume."""
    return {"symbol": symbol, "price": 412.50, "volume": 120400}

@task
def compute_risk_score(data: dict) -> float:
    """Perform deterministic risk assessment."""
    return round(data["price"] * 0.024, 2)

@entrypoint(checkpointer="sqlite:///workflow.db")
def financial_audit_pipeline(symbol: str) -> dict:
    # Tasks run with automatic retries, caching, and state checkpointing
    market = fetch_market_data(symbol)
    risk = compute_risk_score(market)
    return {"symbol": symbol, "market": market, "risk_metric": risk}

# Execute durable workflow
result = financial_audit_pipeline("NVDA")
print(result)`,
  },
  {
    id: "cli",
    title: "alc CLI & Visualizer",
    subtitle: "Scaffold, test, replay checkpoints, and render interactive graphs",
    badge: "Developer CLI",
    filename: "terminal_session.sh",
    highlights: ["alc graph visualize", "alc debug replay", "alc deploy docker"],
    code: `# 1. Scaffold a production agent graph from prebuilt templates
alc graph create my-agent --template react

# 2. Render interactive workflow graph (supports HTML, Mermaid, Graphviz)
alc graph visualize my-agent.py --format html --output graph_preview.html

# 3. Test tools and run graph locally
alc tool test google_web_search --args '{"query": "Alcyoneus OS"}'
alc graph run my-agent.py --input "Summarize latest GitHub release"

# 4. Inspect checkpoint states & replay historical execution traces
alc debug state checkpoint_session_42.json
alc debug replay my-agent.py --checkpoint checkpoint_session_42.json

# 5. Build and deploy containerized agent service
alc deploy docker --tag alcyoneus-agent:v1.1.0 --push`,
  },
]

export const CodeExplorer = () => {
  const [activeTab, setActiveTab] = useState(snippets[0].id)
  const currentSnippet = snippets.find((s) => s.id === activeTab) || snippets[0]

  return (
    <section id="architecture" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[hsl(var(--primary))] opacity-[0.03] blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--primary))] mb-4">
            Interactive Code Architecture
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
            Engineered for <span className="text-gradient">Production Velocity</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto text-lg leading-relaxed">
            From deterministic state graphs to realtime voice agents and multi-agent swarms.
            Explore authentic code patterns from the Alcyoneus OS framework.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {snippets.map((snippet) => {
            const isActive = snippet.id === activeTab
            return (
              <button
                key={snippet.id}
                onClick={() => setActiveTab(snippet.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg shadow-[hsl(var(--primary)/0.25)] font-semibold"
                    : "glass text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]"
                }`}
              >
                <span>{snippet.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-md font-mono ${
                    isActive
                      ? "bg-black/25 text-white"
                      : "bg-[hsl(var(--accent))] text-[hsl(var(--muted-foreground))]"
                  }`}
                >
                  {snippet.badge}
                </span>
              </button>
            )
          })}
        </div>

        {/* Code window */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl overflow-hidden glow-primary border border-[hsl(var(--border))]">
            {/* Window header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[hsl(var(--border))] bg-black/30">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs font-mono text-[hsl(var(--muted-foreground))] ml-2">
                  {currentSnippet.filename}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5">
                  {currentSnippet.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[hsl(var(--primary)/0.12)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.2)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <CopyButton text={currentSnippet.code} ariaLabel={`Copy ${currentSnippet.filename}`} />
              </div>
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-[hsl(var(--background))]/80 min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSnippet.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <pre className="text-[hsl(var(--foreground))] whitespace-pre font-mono text-xs sm:text-sm">
                    {currentSnippet.code}
                  </pre>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom info banner */}
            <div className="px-6 py-3 border-t border-[hsl(var(--border))] bg-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[hsl(var(--muted-foreground))]">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{currentSnippet.subtitle}</span>
              </div>
              <a
                href="https://github.com/sainibhaowal/Alcyoneus-OS/tree/main/examples"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--primary))] hover:underline inline-flex items-center gap-1 font-medium"
              >
                Browse full examples on GitHub
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
