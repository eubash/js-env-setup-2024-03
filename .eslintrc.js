module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "max-len": ["error", { ignoreComments: true }],
    "object-curly-spacing": "off",
    quotes: "off",
    "quote-props": "off",
    "import/prefer-default-export": "off",
    "comma-dangle": "off",
  },
};
