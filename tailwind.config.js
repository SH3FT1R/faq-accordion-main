/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "Light-pink": "hsl(275, 100%, 97%)",
        "Grayish-purple": "hsl(292, 16%, 49%)",
        "Dark-purple": "hsl(292, 42%, 14%)",
      },
      fontFamily: {
        main: ['"Work Sans"', "sans-serif;"],
      },
      width: {
        450: "450px",
        550: "550px",
        700: "700px",
      },
    },
  },
  plugins: [],
};
