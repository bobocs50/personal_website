/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        foreground: "#f8fafc",
        primary: "#06b6d4",
        "primary-dark": "#0891b2",
        secondary: "#1e293b",
        "muted-foreground": "#94a3b8",
        border: "#334155",
        accent: "#06b6d4",
      },
      boxShadow: {
        glow: "0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.25)",
        "glow-md": "0 0 30px rgba(6, 182, 212, 0.4)",
        "glow-lg": "0 0 50px rgba(6, 182, 212, 0.3)",
      },
    },
  },
  plugins: [],
}
