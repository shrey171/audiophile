/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#fafafa',
        accent: '#d87d4a',
        accentLight: '#fbaf85',
        gray: '#f1f1f1',
        lightGray: '#d3d3d3',
        white: '#fff',
        black: '#191919',
        text: 'rgba(0,0,0,0.5)',
        textLight: 'rgba(255,255,255,0.5)',
        divider: 'rgba(255,255,255,0.1)',
        placeholder: 'rgba(0,0,0,.4)',
        inputBorder: '#CFCFCF',
        inputError: '#CD2C2C',
      },
      screens: {
      },
      width: {
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      keyframes: {
      },
      animation: {
      },
    },
  },
};
