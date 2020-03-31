module.exports = function (api) {
  api.cache(true)

  const presets = ['next/babel']

  const plugins = [
    [
      'styled-components',
      {
        displayName: true,
        ssr: true
      }
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          config: './config',
          components: './components',
          data: './data',
          layout: './layouts'
        }
      }
    ]
  ]

  return {
    presets,
    plugins
  }
}
