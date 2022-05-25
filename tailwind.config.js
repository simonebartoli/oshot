const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "smx": "400px",
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        marginDown: "marginDown 0.5s",
        marginUp: "marginUp 0.25s",
        rotate: "rotate 0.25s forwards",
        rotateOpposite: "rotateOpposite 0.25s forwards",
        slideInDown: "slideInDown 0.25s ease-in-out",
        slideOutUp: "slideOutUp 0.25s ease-in-out forwards",
        textFocusIn: "textFocusIn 0.15s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        arrowMove: "arrowMove 0.5s ease-in-out infinite"
      },
      screens: {
        "xls": "1152px"
      },
      fontFamily:{
        homeTitle: ['Assistant']
      }
    },
  },
  plugins: [],

}