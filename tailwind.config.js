/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cormorant Garamond", "ui-sans-serif", "system-ui"],
        mono: ["Nunito Sans", "ui-sans-serif", "system-ui"],
        titleFont: ["Alex Brush", "ui-sans-serif", "system-ui"],
      },
      colors: {
        bgDefault: "#F1F6FF",
        // Opacity : 70%
        bgSidebar: "#F4F5F7",
        titleColor: "#BD945A",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-img": {
          "background-image": "url(/src/assets/home-img1.jpg)",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
