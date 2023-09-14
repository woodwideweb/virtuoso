/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: `500px`,
      sm: `640px`,
      md: `768px`,
      'md+': `900px`,
      lg: `1024px`,
      'lg+': `1152px`,
      xl: `1280px`,
      '2xl': `1600px`,
    },
    extend: {
      colors: {
        primary: {
          50: `#F8FFFB`,
          100: `#EEFFF5`,
          200: `#DEF6EA`,
          300: `#CCEADC`,
          400: `#B7D7C7`,
          500: `#A0C2B0`,
          600: `#8AAE9A`,
          700: `#739A84`,
          800: `#5C8670`,
          900: `#46725A`,
          950: `#2D5741`,
        },
      },
      spacing: {
        112: `28rem`,
        128: `32rem`,
        152: `38rem`,
        176: `44rem`,
      },
    },
  },
  plugins: [],
};
