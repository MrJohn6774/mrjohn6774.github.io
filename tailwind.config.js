/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6B46C1',
          50: '#F3E8FF',
          100: '#E9D5FF',
          200: '#D8B4FE',
          300: '#C084FC',
          400: '#A855F7',
          500: '#9333EA',
          600: '#7E22CE',
          700: '#6B46C1',
          800: '#581C87',
          900: '#3B0764',
        },
      },
    },
  },
  plugins: [],
};
