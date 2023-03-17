/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    theme: {
      extend: {
        spacing: {
          '0.1': '0.063rem'
        },
        backgroundImage: theme => ({
          'mobile-app': 'url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)'
        }),
        colors: {
          'brand-color': '#5d3ebc',
          'primary-brand-color': '#5d3ebc',
          'secondary-brand-color': '#7849f7',
          'brand-yellow': '#ffd300'
        }
      },

    },
  },
  plugins: [],
}
