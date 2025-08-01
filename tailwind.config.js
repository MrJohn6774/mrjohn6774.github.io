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
          DEFAULT: '#0A2540', // deep navy – professional & confident
          50: '#e6ecf2',
          100: '#cfd8e5',
          200: '#a0b1cb',
          300: '#7089b1',
          400: '#416297',
          500: '#234877',
          600: '#0A2540',
          700: '#071b2e',
          800: '#05121d',
          900: '#02090d',
        },
      },
    },
  },
  plugins: [],
};
