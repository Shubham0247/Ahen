/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["rubik-doodle-shadow","sans-serif"],
        sevillana: ["Sevillana","cursive"],
        rowdies: ["Rowdies", "sans-serif"]
      }
    },
  },
  plugins: [],
}

