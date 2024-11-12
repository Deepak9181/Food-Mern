/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"], // Set to "light" to use the light theme
  },
  plugins: [
    require('daisyui'),
  ],
}

