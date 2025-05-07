/** @type { import('@storybook/react-vite').StorybookConfig } */
export default {
    framework: {
      name: '@storybook/react-vite',
      options: {}
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
      '@storybook/addon-essentials',
      '@storybook/experimental-addon-test' // Add this if you installed it manually
    ]
  };
  