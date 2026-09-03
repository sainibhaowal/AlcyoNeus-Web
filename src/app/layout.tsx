import "./globals.css"
import { Header } from "@/components/header/Header"
import { Footer } from "@/components/footer/Footer"

export const metadata = {
  metadataBase: new URL("https://alcyoneos.faimatrix.com"),
  title: "Alcyoneus OS — Production-Grade Python Framework for Intelligent Agents",
  description:
    "Build, orchestrate, and deploy multi-agent LLM systems with 100+ production-ready capabilities. Open-source, Apache 2.0 Licensed.",
  keywords: [
    "AI agents",
    "LLM",
    "Python",
    "multi-agent",
    "orchestration",
    "StateGraph",
    "MCP",
    "A2A",
    "Realtime Audio",
    "alc CLI",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/alcyoneus-mark-transparent.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Alcyoneus OS — Production-Grade Python Framework for Intelligent Agents",
    description:
      "Build, orchestrate, and deploy multi-agent LLM systems with 100+ production-ready capabilities. Open-source, Apache 2.0 Licensed.",
    url: "https://alcyoneos.faimatrix.com",
    siteName: "Alcyoneus OS",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 320,
        alt: "Alcyoneus OS Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}