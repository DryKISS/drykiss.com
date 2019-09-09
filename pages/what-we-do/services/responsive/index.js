/**
 * Responsive
 */

// Layout
import { Page } from 'layout/page'

// UI
import { Container, PageHeading } from 'industry-ui'

export default () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/services/responsive',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page heading='Responsive Sites' meta={meta}>
      Responsive site development
    </Page>
  )
}
