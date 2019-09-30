/**
 * Next Config
 */
const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')
const getPages = require('./config/pages')

const nextConfig = {
  exportPathMap: function (defaultPathMap) {
    const fileObj = getPages()
    return {
      ...fileObj
    }
  },

  transpileModules: ['industry-ui'],
  pageExtensions: ['js']
}

module.exports = withCSS(withTM(nextConfig))
