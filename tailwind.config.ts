import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
        whatsapp: "rgb(var(--whatsapp) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        white: "rgb(var(--white) / <alpha-value>)",
        black: "rgb(var(--black) / <alpha-value>)",
        slate: {
          50: "rgb(var(--slate-50) / <alpha-value>)",
          100: "rgb(var(--slate-100) / <alpha-value>)",
          200: "rgb(var(--slate-200) / <alpha-value>)",
          300: "rgb(var(--slate-300) / <alpha-value>)",
          400: "rgb(var(--slate-400) / <alpha-value>)",
          500: "rgb(var(--slate-500) / <alpha-value>)",
          600: "rgb(var(--slate-600) / <alpha-value>)",
          700: "rgb(var(--slate-700) / <alpha-value>)",
          800: "rgb(var(--slate-800) / <alpha-value>)",
          900: "rgb(var(--slate-900) / <alpha-value>)",
          950: "rgb(var(--slate-950) / <alpha-value>)"
        },
        orange: {
          100: "rgb(var(--orange-100) / <alpha-value>)",
          200: "rgb(var(--orange-200) / <alpha-value>)",
          300: "rgb(var(--orange-300) / <alpha-value>)",
          400: "rgb(var(--orange-400) / <alpha-value>)",
          500: "rgb(var(--orange-500) / <alpha-value>)",
          600: "rgb(var(--orange-600) / <alpha-value>)",
          700: "rgb(var(--orange-700) / <alpha-value>)"
        },
        cyan: {
          100: "rgb(var(--cyan-100) / <alpha-value>)",
          200: "rgb(var(--cyan-200) / <alpha-value>)",
          300: "rgb(var(--cyan-300) / <alpha-value>)",
          400: "rgb(var(--cyan-400) / <alpha-value>)",
          500: "rgb(var(--cyan-500) / <alpha-value>)",
          600: "rgb(var(--cyan-600) / <alpha-value>)",
          700: "rgb(var(--cyan-700) / <alpha-value>)"
        },
        green: {
          100: "rgb(var(--green-100) / <alpha-value>)",
          200: "rgb(var(--green-200) / <alpha-value>)",
          300: "rgb(var(--green-300) / <alpha-value>)",
          400: "rgb(var(--green-400) / <alpha-value>)",
          500: "rgb(var(--green-500) / <alpha-value>)",
          600: "rgb(var(--green-600) / <alpha-value>)",
          700: "rgb(var(--green-700) / <alpha-value>)"
        },
        blue: {
          100: "rgb(var(--blue-100) / <alpha-value>)",
          200: "rgb(var(--blue-200) / <alpha-value>)",
          300: "rgb(var(--blue-300) / <alpha-value>)",
          400: "rgb(var(--blue-400) / <alpha-value>)",
          500: "rgb(var(--blue-500) / <alpha-value>)",
          600: "rgb(var(--blue-600) / <alpha-value>)",
          700: "rgb(var(--blue-700) / <alpha-value>)"
        }
      },
      boxShadow: {
        panel: "0 10px 35px rgba(15, 23, 42, 0.32)"
      }
    }
  },
  plugins: []
};

export default config;
