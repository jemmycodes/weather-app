module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        gray: "rgb(136,146,164)",
        red: "rgb(255,31,67)",
        darkBlue: "rgb(10,31,68)",
        shadyWhite: "rgb(238,240,242)",
      },
    },
  },
  plugins: [],
};
