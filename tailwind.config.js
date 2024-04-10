/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./formkit.theme.ts", // <-- add your theme file
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};

