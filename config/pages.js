/**
 * Pages for the site
 */

module.exports = () => {
  return Object.assign({
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
    '/what-we-do': { page: '/what-we-do' }
  })
}
