import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cardo: ["Cardo", "san-serif"]
      },
      animation: {
        "fading": "fading 5s ease-in-out",
        "scrolling": "scrolling 10s linear infinite",
      },
      keyframes: {
        scrolling: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fading: {
          "0%": { opacity: '0' },
          "25%": { opacity: '0.25' },
          "50%": { opacity: '0.5' },
          "75%": { opacity: '0.75' },
          "100%": { opacity: '1' , backgroundColor: "white"},
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
