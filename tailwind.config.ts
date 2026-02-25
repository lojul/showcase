import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#e5e7eb",
        muted: "#020617",
        accent: {
          DEFAULT: "#22d3ee",
          soft: "#0ea5e9"
        },
        border: "#111827",
        card: {
          DEFAULT: "#020617",
          foreground: "#e5e7eb"
        }
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem"
      },
      boxShadow: {
        card: "0 18px 45px rgba(15,23,42,0.9)"
      }
    }
  },
  plugins: []
};

export default config;

