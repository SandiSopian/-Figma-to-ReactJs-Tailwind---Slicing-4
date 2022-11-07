/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Alex Brush", "ui-sans-serif", "system-ui"],
        textFont: ["Cormorant Garamond", "ui-sans-serif", "system-ui"],
        subtextFont: ["Nunito Sans", "ui-sans-serif", "system-ui"],
      },
      colors: {
        bgDefault: "#F1F6FF",
        // Opacity : 70%
        bgSidebar: "#F4F5F7",
        titleColor: "#BD945A",
      },
    },
  },
  plugins: [],
};
