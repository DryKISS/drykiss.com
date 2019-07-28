/**
 * Navigation
 */
import { Blog } from 'config'

export const Navigation = {

  right: [

    {
      id: 'navHome',
      name: 'Home',
      to: '/'
    },

    {
      id: 'navBlog',
      name: 'Blog',
      to: Blog.path
    },

    {
      id: 'navWhatWeDo',
      name: 'What We Do',
      to: '/what-we-do'
    },

    {
      id: 'navOurWork',
      name: 'Our Work',
      to: '/our-work'
    },

    {
      id: 'navDomains',
      name: 'Domains',
      to: '/domains'
    },

    {
      id: 'navSignIn',
      name: 'Log in',
      to: '/account/sign-in'
    }

  ]

}
