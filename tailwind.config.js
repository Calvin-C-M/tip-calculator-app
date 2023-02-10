/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px'
    },
    colors: {
      primary: 'hsl(172, 67%, 45%)',
      neutral: {
        100: 'hsl(189, 41%, 97%)',
        200: 'hsl(185, 41%, 84%)',
        300: 'hsl(184, 14%, 56%)',
        400: 'hsl(186, 14%, 43%)',
        500: 'hsl(183, 100%, 15%)',
      }
    },
    fontFamily: {
      'body': ['Space Mono']
    },
    fontWeight: {
      bold: 700,
    },
    fontSize: {
      xs: '18px',
      sm: '20px',
      base: '24px',
      lg: '30px',
      xl: '36px',
    },
    extend: {},
  },
  plugins: [],
}
