/**
 * Prototyping
 */

// UI
import { Page } from '@drykiss/industry-ui'

const PageServicesPrototyping = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/services/prototyping',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page pageHeading={{ heading: 'Prototyping' }} meta={meta}>
      Prototyping
    </Page>
  )
}

export default PageServicesPrototyping
