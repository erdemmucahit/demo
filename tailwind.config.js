/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'unicef-blue': '#1CABE2',
        'unicef-dark-blue': '#1697C9',
      },
      keyframes: {
        slideIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards'
      }
    },
  },
  plugins: [],
} 