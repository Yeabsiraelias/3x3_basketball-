import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080B11",
        surface: {
          DEFAULT: "#0F1626",
          light: "#17233D",
          border: "#1E2C4D",
        },
        brand: {
          orange: "#FF5500",
          "orange-glow": "#FF7A00",
          yellow: "#FFB800",
          cyan: "#00F0FF",
          green: "#00E676",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
      animation: {
        "ticker-slide": "ticker 25s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow 2.5s ease-in-out infinite alternate",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 10px rgba(255, 85, 0, 0.4))" },
          "100%": { filter: "drop-shadow(0 0 25px rgba(255, 85, 0, 0.85))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
