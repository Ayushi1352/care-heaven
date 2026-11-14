import type { Config } from 'tailwindcss';

/*
  The design is drawn on a 1686px wide canvas. Every spacing utility is one
  "design pixel" (w-388 = 388px in the design, leading-30 = 30px) and font sizes
  are written as text-[N/16 rem]. From 1024px up the root font size follows the
  viewport (set on <html> in app/layout.tsx), so the desktop layout keeps the
  design's exact proportions on every screen.
*/
const designPixels = Object.fromEntries(
  Array.from({ length: 2001 }, (_, n) => [n, n === 0 ? '0' : `${n / 16}rem`]),
);

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx,json}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    // The desktop layout (xl) starts at 1024px, so 1024 shows the same design as 1440.
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1024px',
    },
    spacing: { px: '1px', ...designPixels },
    extend: {
      lineHeight: designPixels,
      borderColor: {
        DEFAULT: 'currentColor',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          dark: 'var(--color-accent-dark)',
        },
        tertiary: {
          DEFAULT: 'var(--color-tertiary)',
          dark: 'var(--color-tertiary-dark)',
        },
        highlight: {
          DEFAULT: 'var(--color-highlight)',
          dark: 'var(--color-highlight-dark)',
        },
        star: 'var(--color-star)',
      },
      fontFamily: {
        main: ['var(--font-primary)'],
        heading: ['var(--font-heading)'],
        display: ['var(--font-display)'],
        quote: ['var(--font-quote)'],
        alt: ['var(--font-alt)'],
        dm: ['var(--font-dm)'],
        form: ['var(--font-form)'],
        nunito: ['var(--font-nunito-face)'],
      },
    },
  },
  plugins: [],
};
export default config;
