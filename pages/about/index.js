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
    <Page heading='We Do the MVPs' heroHeading='About Us' meta={meta}>
      <About />
    </Page>
  )
}

export default PageAbout
