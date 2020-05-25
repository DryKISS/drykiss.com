/**
 * Digital Marketing
 */

// UI
import { Page } from 'industry-ui'

export default () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/services/digital-marketing',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page pageHeading={{ heading: 'DigitalMarketing' }} meta={meta}>
      Digital Marketing
    </Page>
  )
}
