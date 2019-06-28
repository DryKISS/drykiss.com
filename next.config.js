/**
 * Next Config
 *
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-static-export
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-webpack-bundle-analyzer
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-webpack-bundle-size-analyzer
 */

const withTM = require('@weco/next-plugin-transpile-modules')

module.exports = withTM({

  exportPathMap: async function (defaultPathMap) {
    return Object.assign({}, {
      '/': { page: '/' },

      '/404': { page: '/404' },
      '/our-work': { page: '/our-work' },
      '/privacy-policy': { page: '/privacy-policy' },
      '/site-map': { page: '/site-map' },
      '/terms-conditions': { page: '/terms-conditions' },
      '/what-we-do': { page: '/what-we-do' }
    })
  },

  transpileModules: ['industry-ui']
})
