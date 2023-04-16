/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  safelist: ['bg-red-500', 'text-3xl', 'lg:text-4xl'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var, sans-serif'],
      },
    },
  },

  important: true,

  plugins: [require('@tailwindcss/typography')],
};
