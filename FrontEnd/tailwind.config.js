/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        indie: ["Indie Flower", "cursive"],
        quicksand: ["Quicksand", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        varela:["Varela Round","snas-serif"]
      },
    },
  },
  plugins: [],
}