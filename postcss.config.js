const nested = require(`postcss-nested`);
const tailwindcss = require(`tailwindcss`);
const autoprefixer = require(`autoprefixer`);
const postcssImport = require(`postcss-import`);
module.exports = {
  plugins: [postcssImport, tailwindcss, nested, autoprefixer],
};
