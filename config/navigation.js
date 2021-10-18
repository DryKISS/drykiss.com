/**
 * Navigation
 */

// UI
import { Navbar } from '@drykiss/industry-ui'
import { Brand } from '../config/config'

export const PageAddresses = {
  Blog: '/blog',
  Services: '/services',
  OurWorks: '/our-works',
  Career: '/career',
  OurCompany: '/our-company'
}

export const Navigation = () => {
  const Default = {
    right: [
      {
        id: 'navServices',
        name: 'Services',
        to: PageAddresses.Services
      },
      {
        id: 'blog',
        name: 'Blog',
        to: PageAddresses.Blog
      },
      {
        id: 'navOurCompany',
        name: 'Our Company',
        to: PageAddresses.OurCompany
      },
      {
        id: 'navWorks',
        name: 'Our Works',
        to: PageAddresses.OurWorks
      },
      {
        id: 'navCareer',
        name: 'Careers',
        to: PageAddresses.Career
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
