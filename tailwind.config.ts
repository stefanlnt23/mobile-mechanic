import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#070b12",
        surface: "#0f172a",
        brand: "#1d4ed8",
        whatsapp: "#22c55e",
        ink: "#e2e8f0",
        muted: "#94a3b8"
      },
      boxShadow: {
        panel: "0 10px 35px rgba(15, 23, 42, 0.32)"
      }
    }
  },
  plugins: []
};

export default config;
