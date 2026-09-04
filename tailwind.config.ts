import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f4f1ea",
          2: "#ebe6db",
          3: "#e2dccf",
        },
        ink: {
          DEFAULT: "#15181b",
          2: "#3d4348",
          3: "#6e767c",
        },
        accent: "#f2461d",
        deep: "#052941",
        highlight: "#ffc401",
        rule: "rgba(21,24,27,0.16)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "2px",
      },
      keyframes: {
        "word-in": {
          "0%": { opacity: "0", transform: "translateY(70%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "rule-draw": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "word-in": "word-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "rule-draw": "rule-draw 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
