/**
 * Next Config
 *
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-static-export
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-webpack-bundle-analyzer
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-webpack-bundle-size-analyzer
 */

const getPages = require('./scripts/pages')
const withTM = require('@weco/next-plugin-transpile-modules')

module.exports = withTM({

  exportPathMap: function (defaultPathMap) {
    const fileObj = getPages()
    return {
      ...fileObj
    }
  },

  transpileModules: ['industry-ui'],
  pageExtensions: ['js']
})
