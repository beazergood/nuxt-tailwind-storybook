const stories = ['../../components/**/*.stories.@(ts|js)','../../pages/**/*.stories.js']
const addons  = ["@storybook\u002Faddon-essentials",{
  name: '@storybook/addon-postcss',
  options: {
    postcssLoaderOptions: {
      implementation: require('postcss')
    }
  }
}
]

function nuxifyStorybook(storybookConfig) {
  return {
    ...storybookConfig,
    webpackFinal(config, options) {
      if (options.nuxtStorybookConfig) {
        config = options.nuxtStorybookConfig.webpackFinal(config, options)
      }
      if (typeof storybookConfig.webpackFinal === 'function') {
        config = storybookConfig.webpackFinal(config, options)
      }
      config.module.rules.push({
        test: /\.css$/,
        loaders: [
          // Loader for webpack to process CSS with PostCSS
          {
            loader: 'postcss-loader',
            options: {
              /*
                Enable Source Maps
               */
              sourceMap: true,
              /*
                Set postcss.config.js config path && ctx
               */
              config: {
                path: './.storybook/',
              },
            },
          },
        ],

        include: path.resolve(__dirname, '../'),
      });
      return config
    },
    stories: [
      ...stories,
      ...storybookConfig.stories
    ],
    addons: [
      ...addons,
      ...storybookConfig.addons
    ],
  }
}

module.exports = {
  webpackFinal(config, options) {
    return options.nuxtStorybookConfig.webpackFinal(config, options)
  },
  stories,
  addons,
  nuxifyStorybook
}
