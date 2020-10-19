/**
 * Pricing
 */

// UI
import { Page } from '@drykiss/industry-ui'

const PageServicesPricing = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/services/pricing',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page pageHeading={{ heading: 'Pricing' }} meta={meta}>
      Pricing
    </Page>
  )
}

export default PageServicesPricing
