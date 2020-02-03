/**
 * Next Config
 */
const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')(['industry-ui'])

module.exports = withCSS(withTM())
