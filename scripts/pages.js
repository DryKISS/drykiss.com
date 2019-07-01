/**
 * Pages for the site
 */
module.exports = () => {
  return Object.assign({}, {}, {

    '/': { page: '/' },

    '/404': { page: '/404' },

    '/domains': { page: '/domains' },

    '/our-work': { page: '/our-work' },
    '/what-we-do': { page: '/what-we-do' },

    '/portfolio/facebook/brazil-soccer-name-generator': { page: '/portfolio/facebook/brazil-soccer-name-generator' },
    '/portfolio/facebook/guinness-arthurs-day': { page: '/portfolio/facebook/guinness-arthurs-day' },
    '/portfolio/facebook/walt-disney-prince-of-persia': { page: '/portfolio/facebook/walt-disney-prince-of-persia' },

    '/privacy-policy': { page: '/privacy-policy' },
    '/terms-conditions': { page: '/terms-conditions' },

    '/site-map': { page: '/site-map' }

  })
}
