/**
 * Post install script
 */
const fs = require('fs-extra')
const getPages = require('./pages')
const formatDate = require('./formatDate')

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://drykiss.com/sitemap.xml
Disallow:`

fs.writeFileSync('out/robots.txt', robotsTxt)

console.log('Robots.txt saved!\n')

// SITEMAP.XML
const pages = getPages()
const today = formatDate(new Date())

const sitemapXml =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(pages).map((path) => {
    return `<url>
    <loc>https://drykiss.com${path}</loc>
    <lastmod>${pages[path].lastModified ? formatDate(new Date(pages[path].lastModified)) : today}</lastmod>
  </url>\n  `
  }).join('')}
</urlset>`

fs.writeFileSync('out/sitemap.xml', sitemapXml)

console.log('Sitemap.xml saved!\n\n')
