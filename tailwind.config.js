module.exports = {
  purge: {
    enable: process.env.NODE_ENV !== 'development',
    content: [
      './src/**/*.html',
      './src/**/*.vue',
    ],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      neutral: {
        '00': 'var(--color-neutral-00)',
        10: 'var(--color-neutral-10)',
        20: 'var(--color-neutral-20)',
        30: 'var(--color-neutral-30)',
        40: 'var(--color-neutral-40)',
        50: 'var(--color-neutral-50)',
        60: 'var(--color-neutral-60)',
        70: 'var(--color-neutral-70)',
        300: 'var(--color-neutral-300)',
        400: 'var(--color-neutral-400)',
        500: 'var(--color-neutral-500)',
        600: 'var(--color-neutral-600)',
        700: 'var(--color-neutral-700)',
        800: 'var(--color-neutral-800)',
        900: 'var(--color-neutral-900)',
      },

      brand: {
        100: 'var(--color-brand-100)',
        200: 'var(--color-brand-200)',
        300: 'var(--color-brand-300)',
        400: 'var(--color-brand-400)',
        500: 'var(--color-brand-500)',
        600: 'var(--color-brand-600)',
        700: 'var(--color-brand-700)',
        800: 'var(--color-brand-800)',
        900: 'var(--color-brand-900)',
      },

      skyblue: {
        100: 'var(--color-skyblue-100)',
        200: 'var(--color-skyblue-200)',
        300: 'var(--color-skyblue-300)',
        400: 'var(--color-skyblue-400)',
        500: 'var(--color-skyblue-500)',
        600: 'var(--color-skyblue-600)',
        700: 'var(--color-skyblue-700)',
        800: 'var(--color-skyblue-800)',
        900: 'var(--color-skyblue-900)',
      },

      teal: {
        100: 'var(--color-teal-100)',
        200: 'var(--color-teal-200)',
        300: 'var(--color-teal-300)',
        400: 'var(--color-teal-400)',
        500: 'var(--color-teal-500)',
        600: 'var(--color-teal-600)',
        700: 'var(--color-teal-700)',
        800: 'var(--color-teal-800)',
        900: 'var(--color-teal-900)',
      },

      green: {
        100: 'var(--color-green-100)',
        200: 'var(--color-green-200)',
        300: 'var(--color-green-300)',
        400: 'var(--color-green-400)',
        500: 'var(--color-green-500)',
        600: 'var(--color-green-600)',
        700: 'var(--color-green-700)',
        800: 'var(--color-green-800)',
        900: 'var(--color-green-900)',
      },

      orange: {
        100: 'var(--color-orange-100)',
        200: 'var(--color-orange-200)',
        300: 'var(--color-orange-300)',
        400: 'var(--color-orange-400)',
        500: 'var(--color-orange-500)',
        600: 'var(--color-orange-600)',
        700: 'var(--color-orange-700)',
        800: 'var(--color-orange-800)',
        900: 'var(--color-orange-900)',
      },

      ascential: {
        100: 'var(--color-ascential-100)',
        200: 'var(--color-ascential-200)',
        300: 'var(--color-ascential-300)',
        400: 'var(--color-ascential-400)',
        500: 'var(--color-ascential-500)',
        600: 'var(--color-ascential-600)',
        700: 'var(--color-ascential-700)',
        800: 'var(--color-ascential-800)',
        900: 'var(--color-ascential-900)',
      },

      red: {
        100: 'var(--color-red-100)',
        200: 'var(--color-red-200)',
        300: 'var(--color-red-300)',
        400: 'var(--color-red-400)',
        500: 'var(--color-red-500)',
        600: 'var(--color-red-600)',
        700: 'var(--color-red-700)',
        800: 'var(--color-red-800)',
        900: 'var(--color-red-900)',
      },

      pink: {
        100: 'var(--color-pink-100)',
        200: 'var(--color-pink-200)',
        300: 'var(--color-pink-300)',
        400: 'var(--color-pink-400)',
        500: 'var(--color-pink-500)',
        600: 'var(--color-pink-600)',
        700: 'var(--color-pink-700)',
        800: 'var(--color-pink-800)',
        900: 'var(--color-pink-900)',
      },

      purple: {
        100: 'var(--color-purple-100)',
        200: 'var(--color-purple-200)',
        300: 'var(--color-purple-300)',
        400: 'var(--color-purple-400)',
        500: 'var(--color-purple-500)',
        600: 'var(--color-purple-600)',
        700: 'var(--color-purple-700)',
        800: 'var(--color-purple-800)',
        900: 'var(--color-purple-900)',
      },
    },

    boxShadow: {
      xs: 'var(--shadow-xs)',
      sm: 'var(--shadow-sm)',
      md: 'var(--shadow-md)',
      lg: 'var(--shadow-lg)',
      xl: 'var(--shadow-xl)',
      '2xl': 'var(--shadow-2xl)',
      none: 'var(--shadow-none)',
      inner: 'var(--shadow-inner)',
      outline: 'var(--shadow-outline)',
      default: 'var(--shadow-default)',
    },

    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Arial',
        '"Helvetica Neue"',
        '"Pingfang SC"',
        '"Microsoft Yahei"',
        '"Souce Han Sans SC"',
        '"WenQuanYi Micro Hei"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      display: [
        'Lato',
        'Poppins',
        'Titillium Web',
        '"Helvetica Neue"',
        '"Pingfang SC"',
        '"Microsoft Yahei"',
        '"Souce Han Sans SC"',
      ],
    },

    borderRadius: {
      sm: 'var(--borderRadius-sm)',
      md: 'var(--borderRadius-md)',
      lg: 'var(--borderRadius-lg)',
      none: 'var(--borderRadius-none)',
      full: 'var(--borderRadius-full)',
      default: 'var(--borderRadius-default)',
    },

    maxWidth: {
      '7xl': '100rem',
      300: '300px',
      480: '480px',
      560: '560px',
      720: '720px',
    },

    minWidth: {
      sm: '10rem',
      56: '56px',
      72: '72px',
      120: '120px',
      200: '200px',
      300: '300px',
      355: '355px',
      0: '0',
    },

    minHeight: {
      0: '0',
      3: '3rem',
      270: '270px',
      full: '100%',
      screen: '100vh',
    },

    maxHeight: {
      p90: '90%',
      p80: '80%',
      400: '400px',
      480: '480px',
      550: '550px',
      650: '650px',
    },

    extend: {
      screens: {
        '2xl': '1536px',
        '3xl': '1720px',
      },
      width: {
        120: '120px',
      },
      height: {
        240: '240px',
        320: '320px',
        500: '500px',
        600: '600px',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    visibility: ['responsive', 'hover', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    gridTemplateColumns: ['responsive', 'hover', 'focus'],
  },
  important: true,
  plugins: [],
  future: {
    defaultLineHeights: true,
    standardFontWeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
