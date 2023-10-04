module.exports = {
  "arrow-body-style": "off",
  "prefer-arrow-callback": "off",
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: true,
  trailingComma: "es5",
  importOrder: [
    "^(react|react-dom)$",
    "^(next|next/(.*))$",
    "^styled-components$",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  endOfLine: process.platform === "win32" ? "crlf" : "lf",
};
