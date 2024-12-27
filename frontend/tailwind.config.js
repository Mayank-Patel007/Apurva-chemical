// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        daysOne: ['Days One', 'sans-serif'], // Added custom font
      },
      backgroundImage: {
        'newsletter-bg': "url('/src/assets/newsletterbg.jpg')", // Custom background image
      },
    },
  },
  plugins: [],
}
