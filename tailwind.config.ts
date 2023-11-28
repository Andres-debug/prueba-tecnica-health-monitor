import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        primaryDark: "rgba(255,255,255, 0.7);",
        secondary: "#538EAC",
      },
      backgroundImage: {
        radialBlack:
        "linear-gradient(90deg, #4a90e2 0%, rgba(74, 144, 226, 0.6) 95.83%);",
        blueRadial:
          "linear-gradient(90deg, #63a4ff 0%, rgba(99, 164, 255, 0.6) 95.83%);",
          
          
      },
      boxShadow: {
        dark: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
      },
    },
  },
  plugins: [],
}
export default config
