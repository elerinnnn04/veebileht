/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/src/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'primary-pink': '#f9c8c1'
    },
    extend: {

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

