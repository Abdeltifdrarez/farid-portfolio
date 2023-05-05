/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins"
    },
    extend: {
      colors: {
        ghostWhite: "#f8f8ff",
        grey: "#9f9fa0",
        blue: "#0369A1"
      },
      boxShadow: {
        heroSadow: "0px 0px 16px rgba(0,0,0,0.15)"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
