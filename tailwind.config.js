/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pps: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
