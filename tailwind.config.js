/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        chart: {
          series: "hsl(var(--chart-1))",
          series2: "hsl(var(--chart-2))",
          series3: "hsl(var(--chart-3))",
          series4: "hsl(var(--chart-4))",
          series5: "hsl(var(--chart-5))",
        },
        neon: {
          green: "#00ff88",
          dark: "#0a0a0f",
          darker: "#05050a",
          soft: "#00cc6a",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-zoom": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "border-slide": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "bg-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%, 100% 50%" },
          "50%": { backgroundPosition: "100% 50%, 0% 50%" },
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "scroll": "scroll 20s linear infinite",
        "gradient-zoom": "gradient-zoom 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        "border-slide": "border-slide 20s linear infinite",
        "bg-shift": "bg-shift 15s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px), linear-gradient(hsl(var(--accent)) 1px, transparent 1px)",
        "bg-gradient": "radial-gradient(ellipse at 30% 20%, rgba(0, 255, 136, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0, 255, 136, 0.08) 0%, transparent 50%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}