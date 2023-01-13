const path = require('path');
module.exports = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "features": {
    "interactionsDebugger": true,
  },
  "core": {
    "builder": "@storybook/builder-webpack5",
  },
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  "staticDirs": ["../public"],
}