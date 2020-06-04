/**
 * Application-wide theme for tailwind CSS
 * @type {{plugins: [], theme: {extend: {}}, variants: {}}}
 */
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      screens: {
        'portrait' : { 'raw': '(orientation: portrait)' },
        'landscape' : { 'raw': '(orientation: landscape)' }
      },
      height: {
        'fit-content': 'fit-content'
      },
      colors: {
        'ng-dark': 'var(--ls-dark)',
        'ng-dark-light': 'var(--ls-dark-light)',
        'ng-dark-lighter': 'var(--ls-dark-lighter)',
        'ng-primary': 'var(--ls-primary)',
        'ng-secondary': 'var(--ls-secondary)',
        'ng-highlight': 'var(--ls-highlight)',
        'ng-highlight-dark': 'var(--ls-highlight-dark)',
        'ng-tertiary': 'var(--ls-tertiary)',
        'ng-tertiary-subdued': 'var(--ls-tertiary-subdued)',
      },
      borderWidth: {
        '65': '65px',
      }
    }
  },
  variants: {},
  plugins: []
};
