/**
 * Terms & Conditions
 */

// UI
import { Page } from '@drykiss/industry-ui'

const PageTerms = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/policies/terms-conditions',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page pageHeading={{ heading: 'Terms &amp; Conditions' }} meta={meta}>
      Terms and Conditions
    </Page>
  )
}

export default PageTerms
