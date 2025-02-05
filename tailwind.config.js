/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B7C3',
          dark: '#009DA8',
          light: '#00D1DE',
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
        }
      }
    },
  },
  plugins: [],
};