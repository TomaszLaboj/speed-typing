/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export const content = ["./src/**/*.{html,js,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: colors.yellow,
    },
  },
};
export const plugins = [];
