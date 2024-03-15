/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a1a1a",
          700: "#0B0B0B",
        },
        secondary: {
          400: "#c10006",
          DEFAULT: "#B10006",
        },
      },
      fontFamily: {
        grammy: "Merriweather",
        emza:"Whisper"
      },
    },
  },
  plugins: [],
};
