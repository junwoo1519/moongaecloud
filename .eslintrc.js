module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: [
          "function-declaration",
          "arrow-function",
          "function-expression",
        ],
      },
    ],
  },
};
