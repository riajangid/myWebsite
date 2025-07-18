import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        '1030': '1030px',
      },
      backgroundImage: {
        'soft-purple-fade': `linear-gradient(
          to left bottom,
          #d295ec,
          #ce9bea,
          #caa0e7,
          #c7a5e3,
          #c4aadf,
          #c7b3e1,
          #cbbbe2,
          #cfc4e3,
          #dad3ea,
          #e6e2f2,
          #f2f0f8,
          #ffffff
        )`,

      },
      fontFamily: {
        dmSerif: ['"DM Serif Text"', 'serif'], 
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cherry: {
          DEFAULT: "#BD2D24",
          dark: "#a8261e"
        },
        fadeRed:{
          DEFAULT:"#ECECEC"
        },
        textColor:{
          DEFAULT:"#333333"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '10%': { opacity: '0.9' },
          '20%': { opacity: '0.95' },
          '30%': { opacity: '0.85' },
          '40%': { opacity: '0.92' },
          '50%': { opacity: '0.87' },
          '60%': { opacity: '0.93' },
          '70%': { opacity: '0.88' },
          '80%': { opacity: '0.9' },
          '90%': { opacity: '0.86' },
        },
      },
      animation: {
        "marquee": 'marquee 7s linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "flicker": 'flicker 3s infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
