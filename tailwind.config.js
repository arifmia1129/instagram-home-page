/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3d348b",
          secondary: "#7678ed",
          accent: "#f35b04",
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  },
};
