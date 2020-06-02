module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$|\.pcss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              syntax: 'postcss-scss',
              plugins: () => [
                require('tailwindcss')('./tailwind.config.js')
              ]
            }
          }
        ]
      }
    ]
  }
};
