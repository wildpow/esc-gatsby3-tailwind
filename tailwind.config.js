const colors = require("tailwindcss/colors");
const typography = require("@tailwindcss/typography");
const { screens } = require("tailwindcss/defaultTheme");
const forms = require("@tailwindcss/forms");

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.js", "./src/**/*.jsx"],
    preserveHtmlElements: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xms: "400px",
      phablet: "550px",
      ...screens,
    },
    fontFamily: {
      sans: [
        "Roboto",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: [
        "Roboto Slab",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },

    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: `fadeIn 0.35s linear normal`,
      },

      colors: {
        brandBackground: colors.gray[100],
        brandBlue: colors.lightBlue[900],
        brandRed: colors.red[900],
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        warmGray: colors.warmGray,
        lightBlue: colors.lightBlue,
        rose: colors.rose,
        cyan: colors.cyan,
        indigo: colors.indigo,
      },
    },
  },
  variants: {},
  plugins: [typography, forms],
};
