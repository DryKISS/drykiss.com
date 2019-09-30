/**
 * About
 */

// Layout
import { Page } from 'industry-ui'

export default () => {
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
    <Page heading='About' meta={meta}>
      DryKISS Ltd was setup to simplify the process of development.
    </Page>
  )
}
