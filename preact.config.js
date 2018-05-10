import criticalCssPlugin from 'preact-cli-plugin-critical-css'

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
    ({ plugin }) => (plugin.options.title = '# Hirofumi Miyamoto')
  )
}
