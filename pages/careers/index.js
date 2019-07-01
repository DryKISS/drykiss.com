/**
 * Careers
 */

// Layout
import { Page } from 'layout/page'

// UI
import { Container, PageHeading } from 'industry-ui'

const Careers = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/careers',
    title: `DryKISS develops hybrid mobile and responsive websites`
  }

  return (
    <Page meta={meta}>
      <Container>
        <PageHeading heading='Careers' />
      </Container>
    </Page>
  )
}

export default Careers
