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
        background: "#ffffff",
        foreground: "#0f172a",
        muted: "#f3f4f6",
        accent: {
          DEFAULT: "#22d3ee",
          soft: "#0ea5e9"
        },
        border: "#e5e7eb",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a"
        }
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem"
      },
      boxShadow: {
        card: "0 18px 45px rgba(15,23,42,0.08)"
      }
    }
  },
  plugins: []
};

export default config;

