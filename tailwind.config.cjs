/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto"],
        oswald: ["oswald"],
      },
      colors: {
        mainOrange: "#F1A208",
      },
    },
    screens: {
      xl: { max: "2048px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1600px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1366px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "960px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: "class",
};
