/**
 * Navigation
 */

// UI
import { Navbar } from 'industry-ui'

// Config
import { Blog, Brand } from 'config'

export const Navigation = () => {
  const Default = {
    right: [
      {
        id: 'navHome',
        name: 'Home',
        to: '/'
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
        id: 'navGuides',
        name: 'Guides',
        to: '/guides'
      },
      {
        id: 'navBlog',
        name: 'Blog',
        to: Blog.path
      },
      {
        id: 'navCareer',
        name: 'Careers',
        to: '/careers'
      },
      {
        id: 'navDomains',
        name: 'Domains',
        to: '/domains'
      }
    ]
  }

  return <Navbar brand={Brand.logo} links={Default} />
}
