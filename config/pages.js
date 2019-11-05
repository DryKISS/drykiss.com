/**
 * Pages for the site
 *
 * @todo Find a way to import Slugify from IndustryUI
 */

const slugify = string => {
  const slug = string
    .toLowerCase()
    .replace(/['&]/g, '')
    .replace(/ +/g, ' ')
    .replace(/ /g, '-')

  return slug
}

module.exports = () => {
  const ARTICLES = require('../data/blog/articles')

  // Blog - `/blog/:category/:slug`
  const articles = ARTICLES.Articles.reduce((pages, { category, slug }) => {
    const catSlug = slugify(category)

    return Object.assign({}, pages, {
      [`/blog/${catSlug}/${slug}`]: {
        page: '/blog/[categoryId]/[articleId]'
      }
    })
  }, {})

  return Object.assign(
    {
      ...articles
    },
    {
      // Core
      '/': { page: '/' },
      '/404': { page: '/404' },

      // About
      '/about': { page: '/about' },

      // Blog
      '/blog': { page: '/blog' },

      // Careers
      '/careers': { page: '/careers' },
      '/careers/react': { page: '/careers/react' },
      '/careers/react-intern': { page: '/careers/react-intern' },
      '/careers/react-junior': { page: '/careers/react-junior' },

      // Contact
      '/contact': { page: '/contact' },

      // Domain
      '/domains': { page: '/domains' },

      // Guides
      '/guides': { page: '/guides' },
      '/guides/continuous-intergration/git': { page: '/guides/continuous-intergration/git' },
      '/guides/continuous-intergration/github': { page: '/guides/continuous-intergration/github' },
      '/guides/linting': { page: '/guides/linting' },
      '/guides/mysql': { page: '/guides/mysql' },
      '/guides/nextjs/anatomy': { page: '/guides/nextjs/anatomy' },

      // Our Work
      '/our-work': { page: '/our-work' },

      // Policies
      '/policies/privacy-policy': { page: '/policies/privacy-policy' },
      '/policies/terms-conditions': { page: '/policies/terms-conditions' },
      '/policies/site-map': { page: '/policies/site-map' },

      // Portfolio
      '/portfolio/facebook/brazil-soccer-name-generator': {
        page: '/portfolio/facebook/brazil-soccer-name-generator'
      },
      '/portfolio/facebook/guinness-arthurs-day': {
        page: '/portfolio/facebook/guinness-arthurs-day'
      },
      '/portfolio/facebook/walt-disney-prince-of-persia': {
        page: '/portfolio/facebook/walt-disney-prince-of-persia'
      },

      // Team
      '/team': { page: '/team' },

      // What We Do
      '/what-we-do': { page: '/what-we-do' },
      '/what-we-do/services/digital-marketing': { page: '/what-we-do/services/digital-marketing' },
      '/what-we-do/services/mobile': { page: '/what-we-do/services/mobile' },
      '/what-we-do/services/pricing': { page: '/what-we-do/services/pricing' },
      '/what-we-do/services/prototyping': { page: '/what-we-do/services/prototyping' },
      '/what-we-do/services/responsive': { page: '/what-we-do/services/responsive' },
      '/what-we-do/services/seo': { page: '/what-we-do/services/seo' }
    }
  )
}
