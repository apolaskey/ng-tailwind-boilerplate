const purgecss = require('@fullhuman/postcss-purgecss');

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
                purgecss({
                  // Specify the paths to all of the template files in your project
                  content: [
                    "./src/**/*.html",
                    "./src/**/*.ts"
                    // etc.
                  ],
                  // Include any special characters you're using in this regular expression
                  defaultExtractor: content =>
                    content.match(/[A-Za-z0-9-_:/]+/g) || []
                })
              ]
            }
          }
        ]
      }
    ]
  }
};
