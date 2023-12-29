import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        dark: "#354649",
        primary: "#6C7A89",
        secondary: "#A3C6C4",
        text: "#E0E7E9",
      }
    },
  },
  plugins: [],
}
export default config
