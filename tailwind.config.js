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
        custom3: ['MyCustomFont3', 'sans-serif']
      },
    },
  },
  plugins: [],
}