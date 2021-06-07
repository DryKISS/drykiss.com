/**
 * Navigation
 */

// UI
import { Navbar } from '@drykiss/industry-ui'
import { Brand } from '../config/config'

export const Navigation = () => {
  const Default = {
    right: [
      {
        id: 'navServices',
        name: 'Services',
        to: '/services'
      },
      {
        id: 'navCaseStudies',
        name: 'Case Studies',
        to: '/case-studies'
      },
      {
        id: 'blog',
        name: 'Blog',
        to: '/blog'
      },
      {
        id: 'navOurCompany',
        name: 'Our Company',
        to: '/our-company'
      },
      {
        id: 'navWorks',
        name: 'Our Works',
        to: '/our-works'
      },
      {
        id: 'navCareer',
        name: 'Careers',
        to: '/career'
      },
      // {
      //   id: 'navInsights',
      //   name: 'Insights',
      //   to: '/insights'
      // },
      {
        id: 'navTerms',
        name: 'Terms',
        to: '/terms'
      },
      {
        id: 'navPrivacy',
        name: 'Privacy',
        to: '/privacy'
      },
      {
        id: 'navContacts',
        name: 'Contacts',
        to: '/contacts'
      }
    ]
  }

  return (
    <Navbar
      animational
      brand={Brand.logo}
      custom
      style={{ alignItems: 'center' }}
      widgets={Default}
    />
  )
}
