/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('/src/assets/home/image-hero-desktop.jpg')",
        "hero-tablet": "url('/src/assets/home/image-hero-tablet.jpg')",
        "hero-mobile": "url('/src/assets/home/image-hero-mobile.jpg')",
      },
      backgroundPosition: {
        "pos-pattern-circles": "-5rem -2rem",
      },
      fontSize: {
        navlinks: "14px",
      },
      colors: {
        bg: "#fafafa",
        accent: "#d87d4a",
        accentLight: "#fbaf85",
        gray: "#f1f1f1",
        lightGray: "#d3d3d3",
        white: "#fff",
        black: "#191919",
        text: "rgba(0,0,0,0.5)",
        textLight: "rgba(255,255,255,0.5)",
        divider: "rgba(255,255,255,0.7)",
        placeholder: "rgba(0,0,0,.4)",
        inputBorder: "#CFCFCF",
        inputError: "#CD2C2C",
      },
      screens: {
        global: "70rem",
        tablet: "72rem",
        mobile: "56rem",
      },
      width: {
        global: "1110px",
      },
      height: {
        hero: "calc(100vh - 6rem)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};
