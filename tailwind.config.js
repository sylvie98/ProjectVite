/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'md': '786px',
      'sm': '320px'
    },
    extend: {},
  },
  plugins: [],
}

