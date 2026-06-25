import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05070a",
        surface: "#0a0e14",
        card: "#0d121b",
        border: "#1a2230",
        neon: {
          DEFAULT: "#00ff9c",
          dim: "#0bbf78",
        },
        cyan: {
          glow: "#22d3ee",
        },
        crit: "#ff3860",
        high: "#ff8a3d",
        muted: "#7d8aa0",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(0,255,156,0.25), 0 0 40px rgba(0,255,156,0.1)",
        "neon-sm": "0 0 12px rgba(0,255,156,0.2)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 4s ease-in-out infinite",
        scan: "scan 4s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
