/**
 * Terms & Conditions
 */

// Layout
import { Page } from 'layout/page'

// UI
import { Container, PageHeading } from 'industry-ui'

const TermsConditions = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/terms-conditions',
    title: `DryKISS develops hybrid mobile and responsive websites`
  }

  return (
    <Page meta={meta}>
      <Container>
        <PageHeading heading='Terms &amp; Conditions' />
      </Container>
    </Page>
  )
}

export default TermsConditions
