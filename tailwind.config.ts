import type { Config } from 'tailwindcss';

// Brand colors: keep in sync with src/styles/_tokens.scss (used by the SCSS modules).
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#ff5e14',
        navy: '#001659',
        snow: '#eee',
        muted: 'rgb(87, 88, 100)',
        aqua: 'rgb(0, 179, 173)',
        soft: '#f2f3f5',
      },
      fontFamily: {
        sans: ['var(--font-kodchasan)', 'sans-serif'],
      },
      maxWidth: {
        site: '1170px',
      },
    },
  },
  plugins: [],
};

export default config;
