/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0f",
        paper: "#f5f0e8",
        gold: "#c9a96e",
        "gold-light": "#e8d5b0",
        muted: "#6b6b7a",
        surface: "#13131a",
        border: "#1e1e2e",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        mono: ['"DM Mono"', "monospace"],
        sans: ['"DM Sans"', "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
      },
    },
  },
  plugins: [],
};
