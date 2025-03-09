/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],
        custom2: ['MyCustomFont2', 'sans-serif'],
        custom3: ['MyCustomFont3', 'sans-serif'],
        custom4: ['MyCustomFont4', 'sans-serif'],
        custom5: ['MyCustomFont5', 'sans-serif'],
        custom6: ['MyCustomFont6', 'sans-serif']
      },
      animation: {
        shineEffect: "shine 2s infinite",
      },
      keyframes: {
        shine: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
      
    },
  },
  plugins: [],
}