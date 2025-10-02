/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f7',
          100: '#b3e8e8',
          200: '#80d9d9',
          300: '#4dcaca',
          400: '#1abbbb',
          500: '#00a5a5',
          600: '#008585',
          700: '#006565',
          800: '#004545',
          900: '#002525',
        },
        secondary: {
          50: '#fff8f0',
          100: '#ffefdc',
          200: '#ffdbb8',
          300: '#ffc285',
          400: '#ffa347',
          500: '#ff8a1f',
          600: '#ff6b00',
          700: '#e85d00',
          800: '#c24d00',
          900: '#a03f00',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

