/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        bgBlue: "#4a9fc6",
        bgLightBlue: "#5db1b1",
      },
    },
  },
  plugins: [],
};
