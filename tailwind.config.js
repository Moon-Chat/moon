/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'hermit': ['Hermit', 'monospace']
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
};