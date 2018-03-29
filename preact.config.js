export default function(config, env, helpers) {
  const postcssLoader = helpers.getLoadersByName(config, 'postcss-loader')
  postcssLoader.forEach(({ loader }) => delete loader.options)

  const { loader: cssLoader } = helpers.getLoadersByName(
    config,
    'css-loader'
  )[0]
  cssLoader.options.localIdentName = '[name]-[local]-[hash:base64:5]'

  // config.module.entry.push({
  //   recharts: './node_modules/recharts/umd/Recharts.min.js'
  // })

  // const {CommonsChunkPlugin} = helpers.getPluginsByName(config, 'CommonsChunkPlugin')

  // CommonsChunkPlugin({
  //   name: 'recharts',
  //   async: true
  // })
}
