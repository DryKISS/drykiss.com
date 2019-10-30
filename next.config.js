/**
 * Next Config
 */
const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')

const nextConfig = {
  transpileModules: ['industry-ui'],
  pageExtensions: ['js']
}

module.exports = withCSS(withTM(nextConfig))
