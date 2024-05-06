/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'astral': {
          '50': '#edf8fa', 
          '100': '#dff2f5', 
          '200': '#b0e0e8', 
          '300': '#88cddb', 
          '400': '#41a6bf', 
          '500': '#087fa4', 
          '600': '#076e94', 
          '700': '#05537a', 
          '800': '#033d61', 
          '900': '#01294a', 
          '950': '#001830'
      },
      'shark': {
        '50': '#f2f4f5', 
        '100': '#e4e8eb', 
        '200': '#c0c7cc', 
        '300': '#9aa3ab', 
        '400': '#5a626e', 
        '500': '#23272f', 
        '600': '#1b2029', 
        '700': '#121621', 
        '800': '#0c111c', 
        '900': '#070a14', 
        '950': '#03050d'
    }
      },
    },
  },
  plugins: [],
  
}

