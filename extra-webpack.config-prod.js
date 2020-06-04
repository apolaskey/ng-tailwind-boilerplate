const purgecss = require('@fullhuman/postcss-purgecss');
const purgeRule = purgecss({
  content: [
    "./src/**/*.html",
    "./src/**/*.ts"
  ],
  defaultExtractor: content =>
    content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  module: {
    rules: [
      {
        test: /(\.scss)$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              syntax: 'postcss-scss',
              plugins: () => [
                //require('postcss-import'),
                require('tailwindcss')('./tailwind.config.js'),
                purgeRule
              ]
            }
          }
        ]
      }
    ]
  }
};
