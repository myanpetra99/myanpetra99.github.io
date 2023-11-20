/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#06bad4',
      }
    },
    fontFamily: {
      'caveat': ['Caveat', 'cursive'],
      'poppins': ['Poppins', 'sans-serif'],
  },
  plugins: [],
}
}