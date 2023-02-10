/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontSize: {
        xss: '0.5rem',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
