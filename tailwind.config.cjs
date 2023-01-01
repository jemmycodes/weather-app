/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        bgLighterBlue: "#f2fcfe",
        bgDarkBlue: "#2f5d8a",
        bgLightBlue: "#56CCF2",
        shadedBlue: "#4a6fa1",
        grayishcolor: "#727e8e",
        ashColor: "#9098b2",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
