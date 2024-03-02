/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hands': "url('/public/hands.png')"
      },
      colors: {
        primary: "#c1c9d0",
        secondary: "#e5dede",
        thirdly: "#8c9a65",
      },
      fontFamily: {
        dancing: ["Dancing Script", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      }
    },
    screens: {
      sm: "0px",
      md: "768px",
    },
  },
  plugins: [],
};
