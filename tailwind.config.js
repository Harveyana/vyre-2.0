/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fade-right-light': 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255, 255, 255, 1) 100%)',
        'fade-right-dark': 'linear-gradient(to right, rgba(30,30,30,1) 0%, rgba(18,23,29,1) 100%)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

