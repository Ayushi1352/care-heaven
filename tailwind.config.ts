import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    // The desktop layout (xl) starts at 1024px, so 1024 shows the same design as 1440.
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1024px",
    },
    extend: {
      borderColor: {
        DEFAULT: "currentColor",
      },
      fontFamily: {
        sans: ["var(--font-primary)"],
        heading: ["var(--font-heading)"],
        display: ["var(--font-display)"],
        quote: ["var(--font-quote)"],
        alt: ["var(--font-alt)"],
        dm: ["var(--font-dm)"],
        form: ["var(--font-form)"],
        nunito: ["var(--font-nunito-face)"],
      },
    },
  },
};
export default config;
