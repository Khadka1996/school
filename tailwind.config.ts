import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
        sm: "0.9rem",
        lg: "1rem",
      },
      screens: {
        "2xl": "1220px",
      },
    },
    extend: {
      colors: {
        primary: "#0A1F44",
        secondary: "#DC143C",
        accent: "#FFD700",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "0.75rem",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg) translateY(0px)" },
          "25%": { transform: "rotate(1.5deg) translateY(-2px)" },
          "50%": { transform: "rotate(0deg) translateY(0px)" },
          "75%": { transform: "rotate(-1.5deg) translateY(2px)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.06)", opacity: ".9" },
        },
      },
      animation: {
        wave: "wave 5s ease-in-out infinite",
        pulseSoft: "pulseSoft 2s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10, 31, 68, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
