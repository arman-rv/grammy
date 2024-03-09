/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a1a1a",
          700: "#0B0B0B",
        },
        secondary: {
          DEFAULT: "#B10006",
        },
      },
    },
  },
  plugins: [],
};
