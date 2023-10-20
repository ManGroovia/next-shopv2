/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },

          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        btnClicked: "wiggle 0.3s ease",
      },
      colors: {
        main: "#ECF4FF",
        gradient: {
          violet: "linear-gradient(270deg, #4D5EF6 0%, #F64D4D 100%)",
        },
        primary: {
          DEFAULT: "#E43030",
          orange: "#D48D3B",
          green: "rgb(6, 153, 6)",
          border: "#e4e7ee",
          blue: "#0d63f3",
        },
        secondary: "#282828",
        "gray-200": "#EAECF0",
        "gray-300": "D0D5DD",
        "gray-500": "#667085",
        "gray-600": "#475467",
        "gray-700": "#344054",
        "gray-900": "#101828",
        "white-100": "#F4F4F4",
        "white-200": "#EDF0F8",
        "black-100": "#3D4258",
        "neutral-black": "#23263B",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      maxWidth: {
        "10xl": "1440px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
