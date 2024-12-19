/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        brutalist: "2px 2px 0px black",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
