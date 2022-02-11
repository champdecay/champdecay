module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#051937",
        secondary: "#00bf72",
        tertiary: "#008793"
      },
      fontSize: {
        "10xl": "15rem",
      }
    },
    container: {
      center: true
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
