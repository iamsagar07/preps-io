/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-border-color': 'bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600;',
      },
    },
  },
  plugins: [],
};