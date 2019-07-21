/**
 * Next Config
 */
const getPages = require('./config/pages')
const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')

module.exports = withCSS(
  withTM({
    exportPathMap: function (defaultPathMap) {
      const fileObj = getPages()
      return {
        ...fileObj
      }
    },

    transpileModules: ['industry-ui'],
    pageExtensions: ['js']
  })
)
