/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // https://tailwindcss.com/docs/content-configuration
    "./src/**/*.{js,jsx,ts,tsx}",
    './*.php',
    './inc/**/*.php',
    './templates/**/*.php',
    './safelist.txt'
    //'./**/*.php', // recursive search for *.php (be aware on every file change it will go even through /node_modules which can be slow, read doc)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

