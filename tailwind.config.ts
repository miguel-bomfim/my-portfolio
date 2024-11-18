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
      fontFamily: {
        mono: ['var(--font-roboto)'],
      },
      gridTemplateColumns: {
        '0': 'repeat(1, minmax(0, 0.95fr))',
      },
      colors: {
        darkColor: '#262626',
        lightColor: '#FAF9F6',
        primaryColor: {
          100: '#5581D9',
          200: '#5E88BF',
        },
        secondaryColor: {
          100: '#F2E205',
          200: '#D7F205',
        },
      },
    },
  },
  plugins: [],
}
export default config
