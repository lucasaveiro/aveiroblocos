
import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f7fb",
          100: "#e8edf7",
          200: "#c7d4ea",
          300: "#a5b9dc",
          400: "#3b5a8f",
          500: "#2a4671",
          600: "#203859",
          700: "#182a42",
          800: "#101c2b",
          900: "#0b141f"
        },
        graybrand: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827"
        }
      }
    }
  },
  plugins: []
}
export default config
