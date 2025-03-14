/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure it scans all files
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Ensign:Sans",
          "Open Sans",
          "Noto Sans",
          "Helvetica",
          "Arial",
          "system-ui",
          "-apple-system",
          ...fontFamily.sans,
        ],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

