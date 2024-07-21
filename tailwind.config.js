/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        crimson: "#ef2b47",
        gray: {
          100: "#1e1e1e",
          300: "#98A2B3",
          400: "#6D737A3D",
          500: "#6d737a",
          800: "#EAECF0",
        },
        black: "#000",
        lightsteelblue: "#b8c2d8",
        primary: "#3a98b9",
        secondary: "#eee",
        gainsboro: "#d9d9d9",
        tertiary: "#20B486",
      },
      spacing: {},
      fontFamily: {
        sans: ["Manrop", "sans-serif"]
      },
      borderRadius: {
        "3xs": "10px",
        "81xl": "100px",
      },
    },
    "fontSize": {
      "5xl":"4rem",
      "4xl": "2.25rem",
      "3xl": "2rem",
      "2xl": "1.5rem",
      "xl": "1.25rem",

      "base": "1rem",
      // "sm": "0.875rem",
      // "xs": "0.75rem",
      "inherit": "inherit"
    }
  },
  plugins: [],
};
