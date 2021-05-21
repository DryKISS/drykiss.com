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
      // {
      //   id: 'navCareer',
      //   name: 'Careers',
      //   to: '/careers'
      // },
      {
        id: 'navOurCompany',
        name: 'Our Company',
        to: '/our-company'
      },
      {
        id: 'navInsights',
        name: 'Insights',
        to: '/insights'
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
