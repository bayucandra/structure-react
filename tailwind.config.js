module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      spacing: {
        '4.25': '1.0625rem',
        '4.5': '1.125rem',
        '5.75': '1.4375rem',
        '7.5': '1.875rem',//30px
        '12.5': '3.125rem',
      },
      colors: {
        'primary': {
          1000: '#1A1A1C'
        },
        'stgrey': {
          1: '#5B616E',
          6: '#F5F6F7' 
        }
      }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
    },
  },
  prefix: 'tw-',
  plugins: [],
}
