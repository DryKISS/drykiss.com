module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', 'next/babel'],
  env: {
    development: {
      plugins: [
        [
          'styled-components',
          { ssr: true, displayName: true, preprocess: false }
        ]
      ],
      presets: ["next/babel"]
    },
    production: {
      plugins: [
        [
          'styled-components',
          { ssr: true, displayName: false, preprocess: false }
        ]
      ],
      presets: ["next/babel"]
    }
  },
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ],
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
