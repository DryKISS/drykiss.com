/**
 * Contact
 */

// Layout
import { Page } from 'layout/page'

// UI
import { Container, PageHeading } from 'industry-ui'

const Contact = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/contact',
    title: `DryKISS develops hybrid mobile and responsive websites`
  }

  return (
    <Page meta={meta}>
      <Container>
        <PageHeading heading='Contact' />
      </Container>
    </Page>
  )
}

export default Contact
