/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1777c9",
        "primary-900": "#2041b6",
        "primary-700": "#2250fc",
        "primary-500": "#3f9ad6",
        secondary: "#c8232c",
        "my-gray": "#f3f5f8",
        danger: "#fc0718",
        dark: "#181818"
      }
    },
  },
  plugins: [],
}

