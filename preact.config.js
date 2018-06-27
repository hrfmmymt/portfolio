import criticalCssPlugin from 'preact-cli-plugin-critical-css'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default function(config, env, helpers) {
  const postcssLoader = helpers.getLoadersByName(config, 'postcss-loader')
  postcssLoader.forEach(({ loader }) => delete loader.options)

  const options = {}
  criticalCssPlugin(config, env, options)

  const htmlWebpackPlugin = helpers.getPluginsByName(
    config,
    'HtmlWebpackPlugin'
  )
  htmlWebpackPlugin.forEach(
    ({ plugin }) => (plugin.options.title = '# hirofumi miyamoto')
  )

  config.plugins.push(
    new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: `*.*` }])
  )
}
