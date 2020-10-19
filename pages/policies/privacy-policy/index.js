/**
 * Privacy Policy
 */

// UI
import { Page } from '@drykiss/industry-ui'

consy PagePrivacy =  () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/policies/privacy-policy',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page pageHeading={{ heading: 'Private Policy' }} meta={meta}>
      Privacy Policy
    </Page>
  )
}

export default PagePrivacy
