const path = require('path')

const project_path = (dir) =>
  path.resolve(path.join(__dirname, '../../../', dir))

const resolve_module = (name, dir) => {
  return {
    find: name,
    replacement: project_path(dir),
  }
}

const resolved_modules = [
  ['@packages/ui', 'packages/ui'],
  ['@packages/counter', 'packages/counter'],
]

module.exports = {
  stories: [
    // apps/storybook
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.tsx',
    // apps/*
    '../../../apps/**/stories/**/*.stories.mdx',
    '../../../apps/**/stories/**/*.stories.tsx',
    '../../../apps/**/*.stories.mdx',
    '../../../apps/**/*.stories.tsx',
    // packages/*
    '../../../packages/**/stories/**/*.stories.mdx',
    '../../../packages/**/stories/**/*.stories.tsx',
    '../../../packages/**/*.stories.mdx',
    '../../../packages/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: resolved_modules.map((def) => resolve_module(def[0], def[1])),
      },
    }
  },
  docsPage: {
    docs: 'automatic',
  },
}
