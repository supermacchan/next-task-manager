import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      xxl: '1752px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'error-red': '#FF5757',
      'white': '#FFF',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '1.5rem',
        md: '5.25rem',
        xl: '2rem',
        xxl: '2rem',
      },
    },
  },
  plugins: [],
}
export default config
