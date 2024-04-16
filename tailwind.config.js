/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter",
        sInter: "InterSemi",
        bInter: "InterBold",
      },
    },
  },
  plugins: [],
};
