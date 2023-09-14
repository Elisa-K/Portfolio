import preline from 'preline/plugin.js'

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/**/*.astro',
    './src/**/*.{astro,js,jsx,ts,tsx,vue}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#333',
      gray: colors.gray,
      slate: colors.slate,
      green: colors.green,
      blue: colors.blue,
      red: colors.red,
      'green-light': '#edf1d6',
      'green-dark': '#40513B',
      'green-dark-700': '#75826A',
      'red-light': '#D3756B',
      'red-dark': '#A75D5D',
    },
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      giaza: ['Giaza'],
    },
  },
  darkMode: 'class',
  plugins: [preline, require('tailwindcss-animated')],
}
