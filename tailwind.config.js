/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3ED",
        sand: "#EAE2D6",
        cocoa: { DEFAULT: "#3E2C23", light: "#5B4335" },
        slate: { brand: "#5F7F98", soft: "#8FA9BD", deep: "#2E4658" },
        gold: "#B08A62",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(62,44,35,.25)",
      },
    },
  },
  plugins: [],
};
