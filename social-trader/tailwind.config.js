/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './pages/**/*.{js,vue,ts}',
    './plugins/**/*.{js,vue,ts}',
    './nuxt.config.ts',
    './app.vue',
  ],
  title: 'Socal Trader',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      laptop: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    lineHeight: {
      'extra-loose': '2.5',
      12: '3rem',
    },
    extend: {
      padding: {
        22: '22px',
        24: '24px',
        twenty: '20px',
        6: '6px',
        16.1: '16.1px',
        10: '10px',
        12: '12px',
        1: '1px',
        14: '14px',
        30: '30px',
        34: '34px',
        32: '32px',
      },
      margin: {
        14: '14px',
        16: '16px',
        24: '24px',
        45: '45px',
      },
      minHeight: {
        20: '20px',
      },
      colors: {
        gray: '#8D8D8D',
        white: '#FFFFFF',
        whiteOpacity: '#FFFFFF1F',
        darkOpacity: '#2f2f2f0f',
        dark: '#1F252B',
        black: '#000000',
        blue: '#1fb6ff',
        purple: '#776DDF',
        purpleOpacity: '#776DDF1F',
        bluelight: '#6FECE3',
        bluelightOpacity: '#6FECE31F',
        yellow: '#A0FAAC',
        yellowOpacity: '#A0FAAC1F',
        graySelect: '#232427',
        greenShadow: '#86DCA5',
        blueShadow: '#6273BB',
        darkShadow: '#12181e',
      },
      rotate: {
        '90N': '-90deg',
      },
      borderRadius: {
        lg: '30rem',
      },
      boxShadow: {
        main: '0 2px 20px 0px rgba(209, 209, 209, 0.65), 0px 6px 5px 0px rgba(0, 0, 0, 0.23), 0px 10px 16px 0px rgba(209, 209, 209, 0.22)',
        mainDark:
          '0 2px 20px 0px rgba(230, 230, 230, 0.95), 0px 6px 5px 0px rgba(0, 0, 0, 0.53), 0px 10px 16px 0px rgba(230, 230, 230, 0.52)',
      },
    },
  },
  plugins: [],
};
