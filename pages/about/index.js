/**
 * About
 */

// Layout
import { Page, Space, Text } from 'industry-ui'

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
    <Page pageHeading={{ heading: 'About' }} meta={meta}>
      <Text>DryKISS Ltd was setup to simplify the process of development.</Text>
      <Space />
    </Page>
  )
}
