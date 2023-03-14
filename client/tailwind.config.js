/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        card: 'repeat(auto-fill, minmax(150px, 1fr))',
      },
      backgroundImage: {
        logo: "url('../public/img/logo.png')",
      },
    },
  },
  plugins: [],
}
