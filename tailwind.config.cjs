/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#596E83",
        blue: {
          50: "#EFF6FF",
          100: "#BFDBFE",
          300: "#596E83",
          500: "#111184",
          700: "#1d4ed8",
        },
        gray: {
          50: "#d9d9d9",
          100: "#d6d4d4",
          500: "#666666",
          600: "#4f5660",
          700: "#2A2D33",
          800: "#0d1525",
        },
        amber: {
          100: "#fef3c7",
          700: "#b45309",
        },
        green: {
          100: "#dcfce7",
          500: "#1EA382",
          700: "#047857",
        },
        rose: {
          50: "#EAE0DF",
        },
        wheat: {
          50: "#f6e4c1",
          100: "#f5deb3",
          200: "#f2d49d",
        },
        white: "#f9f9f9",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
