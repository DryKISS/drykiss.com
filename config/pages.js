/**
 * Pages for the site
 */
module.exports = () => {
  const { ARTICLES } = require('../data/blog')

  // Blog -  `/blog/:slug`
  let articles = ARTICLES.reduce(
    (pages, { slug }) =>
      Object.assign({}, pages, {
        [`/blog/${slug}`]: { page: `/blog/${slug}` }
      }),
    {}
  )

  return Object.assign({}, {
    ...articles
  }, {

    // Core
    '/': { page: '/' },
    '/404': { page: '/404' },

    // About

    // Careers

    // Contact

    // Domain
    '/domains': { page: '/domains' },

    // Our Work
    '/our-work': { page: '/our-work' },

    // Policies
    '/policies/privacy-policy': { page: '/policies/privacy-policy' },
    '/policies/terms-conditions': { page: '/policies/terms-conditions' },
    '/policies/site-map': { page: '/policies/site-map' },

    // Portfolio
    '/portfolio/facebook/brazil-soccer-name-generator': { page: '/portfolio/facebook/brazil-soccer-name-generator' },
    '/portfolio/facebook/guinness-arthurs-day': { page: '/portfolio/facebook/guinness-arthurs-day' },
    '/portfolio/facebook/walt-disney-prince-of-persia': { page: '/portfolio/facebook/walt-disney-prince-of-persia' },

    // Team

    // What We Do
    '/what-we-do': { page: '/what-we-do' },
    '/what-we-do/services/digital-marketing': { page: '/what-we-do/services/digital-marketing' },
    '/what-we-do/services/mobile': { page: '/what-we-do/services/mobile' },
    '/what-we-do/services/pricing': { page: '/what-we-do/services/pricing' },
    '/what-we-do/services/prototyping': { page: '/what-we-do/services/prototyping' },
    '/what-we-do/services/responsive': { page: '/what-we-do/services/responsive' },
    '/what-we-do/services/seo': { page: '/what-we-do/services/seo' }

  })
}
