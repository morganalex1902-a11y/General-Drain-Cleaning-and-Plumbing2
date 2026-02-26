import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          red: "#C8102E",
          navy: "#002868",
          gold: "#FFD700",
          light: "#f8f8f8",
        },
      },
      backgroundImage: {
        "gradient-patriotic": "linear-gradient(135deg, #C8102E 0%, #002868 50%, #C8102E 100%)",
        "gradient-hero": "linear-gradient(to bottom, rgba(0, 40, 104, 0.9), rgba(200, 16, 46, 0.9))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
