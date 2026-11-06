/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F2EEE8",
        cream: "#F8F5F0",
        sand: "#E6DED2",
        cocoa: { DEFAULT: "#4A382C", light: "#6B5546", dark: "#2F231B" },
        slate: { brand: "#4F7A93", soft: "#8DAFC2", deep: "#2B4556" },
        gold: "#A88462",
      },
      fontFamily: {
        display: ['"Bodoni Moda"', "Didot", "Georgia", "serif"],
        script: ['"Mrs Saint Delafield"', "cursive"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(47,35,27,.35)",
      },
    },
  },
  plugins: [],
};
