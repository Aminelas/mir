module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: ['airbnb'],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    'expectAssertion': true,
    'expectDeprecation': true,
    'expectNoDeprecation': true,
    'expectWarning': true,
    'expectNoWarning': true,
    'ignoreAssertion': true,
    'ignoreDeprecation': true,

    // required for ember-cli-mirage
    'server': true,

    // A safe subset of 'browser:true':
    'window': true,
    'console': true,
    'document': true,
    'clearTimeout': true,
    'setInterval': true,
    'clearInterval': true,

    'Symbol': true,
    'WeakMap': true,
  },
  rules: {
    'no-console': ["error", { allow: ["warn", "error"] }],

    // override airbnb defaults
    'prefer-const': 1,
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/extensions': 0,
  }
};
