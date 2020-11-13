module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      inset: {
        px: '1px',
        '-px': '-1px',
        '1/2': '50%',
        '-1/2': '-50%',
      },
      colors: {
        textColor: 'var(--text-color)',
        textLink: 'var(--text-link-color)',
        bgColor: 'var(--bg-color)',
      },
    },
  },
  variants: {
    margin: ({ after }) => after(['last']),
  },
  plugins: [],
};
