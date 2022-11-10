const path = require("path")
const project_path = (dir) => path.resolve(path.join(__dirname, "../../../", dir))
const resolve_module = (name, dir) => {
  return {
    find: name,
    replacement: project_path(dir),
  }
}
module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [resolve_module("ui", "packages/ui")],
      },
    }
  },
  docsPage: {
    docs: "automatic",
  },
}
