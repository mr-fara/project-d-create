/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'working-img' :  "url('/work-proceess.webp')",
      },
      fontFamily: {
        'primary' : ["Manrope", "sans-serif"],
        'secondary' : ["syne", "sans-serif"] 
      },
      colors: {
        'herobg' : "#0e1122",
        'para': 'rgb(0 0 0 / 80%)',
        'primary': "#0D8AFF"
      }
    },
  },
  plugins: [],
}

