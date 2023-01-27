/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontSize: {
        xss: '0.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
