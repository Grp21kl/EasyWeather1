/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-background': '#8D30CB', // Define tu color personalizado aquí
      },
    },
  },
  plugins: [],
}
