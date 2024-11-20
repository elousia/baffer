import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        "geist-sans": "var(--font-geist-sans)",
        "geist-mono": "var(--font-geist-mono)",
        inter: "var(--font-inter)",
        "instrument-serif": "var(--font-instrument-serif)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
