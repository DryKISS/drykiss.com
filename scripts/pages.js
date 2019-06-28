/**
 * Pages for the site
 */
module.exports = () => {
  return Object.assign({}, {}, {

    '/': { page: '/' },

    '/404': { page: '/404' },
    '/our-work': { page: '/our-work' },
    '/privacy-policy': { page: '/privacy-policy' },
    '/site-map': { page: '/site-map' },
    '/terms-conditions': { page: '/terms-conditions' },
    '/what-we-do': { page: '/what-we-do' }

  })
}
