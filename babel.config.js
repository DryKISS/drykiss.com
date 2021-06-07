module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', 'next/babel'],
  env: {
    development: {
      plugins: [
				'@babel/plugin-transform-runtime',
        [
          'styled-components',
          { ssr: true, displayName: false, preprocess: true }
        ]
      ],
      presets: ["next/babel"]
    },
    production: {
      plugins: [
				'@babel/plugin-transform-runtime',
        [
          'styled-components',
          { ssr: true, displayName: false, preprocess: true }
        ]
      ],
      presets: ["next/babel"]
    }
  },

  overrides: [
    {
      include: ['./node_modules'],
      plugins: [
        [
          'babel-plugin-transform-require-ignore',
          {
            extensions: ['.css']
          }
        ]
      ]
    }
  ]
}
