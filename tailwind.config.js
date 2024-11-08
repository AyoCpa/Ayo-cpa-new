const {fontFamily} = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["var(--font-inter)" , ...fontFamily.sans],
        ubuntu:['var(--font-ubuntu)' , ...fontFamily.sans],
        ubuntuLight: ['var(--font-ubuntu-light)' , ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}