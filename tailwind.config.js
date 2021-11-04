module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            strong: {
              color: '#f00',
            },
            h2: {
              color: 'indigo',
            }
          },
        },
        xl: {
          css: {
            h1: {
              color: 'green',
            }
          }
        },
        lg: {
          css: {
            h1: {
              color: 'blue',
            }
          }
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
