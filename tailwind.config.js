/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#111111",
        accent: "#00f5ff", 
      },
    },
  },
  plugins: [],
}