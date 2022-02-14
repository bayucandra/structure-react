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
        md: '2.5rem',
        lg: '3.125rem',
        // lg: '4rem',
        xl: '3.125rem',
        // xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      spacing: {
        '2.5': '0.625rem',//10px
        '3.75': '0.9375rem',//15px
        '4.25': '1.0625rem',
        '4.5': '1.125rem',
        '5.75': '1.4375rem',
        '6.25': '1.5625rem', //25px
        '7.5': '1.875rem',//30px
        '10.5': '2.625rem',//42px
        '11.5': '2.875rem',//46px
        '12.5': '3.125rem',//50px
        '15': '3.75rem',//60px
        '15.25': '3.8125rem',//61px
        '17': '4.25rem',//68px
        '19.5': '4.875rem',//78px
        '25': '6.25rem',//100px
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
