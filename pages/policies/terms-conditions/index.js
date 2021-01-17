/**
 * Terms & Conditions
 */

// UI
import { Container } from '@drykiss/industry-ui'
import { Page } from 'components'

const PageTerms = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/policies/terms-conditions',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page heroHeading='Terms &amp; Conditions' meta={meta}>
      <Container>Terms and Conditions</Container>
    </Page>
  )
}

export default PageTerms
