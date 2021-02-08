/**
 * About
 */

import { About, Page } from 'components'

const PageAbout = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/about',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page
      heading='We do MVPs and MORE'
      heroHeading='About Us'
      heroSubHeading='Let us create something that not only looks great but deliver results for you.'
      meta={meta}
    >
      <About />
    </Page>
  )
}

export default PageAbout
