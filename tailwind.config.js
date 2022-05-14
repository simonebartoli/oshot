module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marginDown: "marginDown 0.5s",
        marginUp: "marginUp 0.25s",
        rotate: "rotate 0.25s forwards",
        rotateOpposite: "rotateOpposite 0.25s forwards",
        slideInDown: "slideInDown 0.5s",
        slideOutUp: "slideOutUp 0.5s forwards"
      },
      screens: {
        "xls": "1152px"
      }
    },
  },
  plugins: [],
}