/**
 * Next Config
 */
const withTM = require('next-transpile-modules')(['industry-ui'])
const getPages = require('./config/pages')

const nextConfig = {
  pageExtensions: ['js'],

  exportPathMap: function (defaultPathMap) {
    const fileObj = getPages()
    return {
      ...fileObj
    }
  }
}

module.exports = withTM(nextConfig)
