/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#93c5fd',
        text: '#fffff0',
        'black-800': '#09090b'
      },
      gridTemplateColumns: {
        'auto-fill-md': 'repeat(auto-fill, minmax(20rem, 1fr))'
      }
    }
  },
  plugins: []
}
