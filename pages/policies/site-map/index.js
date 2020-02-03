/**
 * Site Map
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
    path: '/policies/site-map',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page pageHeading={{ heading: 'Site Map' }} meta={meta}>
      Site Map
    </Page>
  )
}
