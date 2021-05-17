/**
 * Terms and Condtions
 */

// UI
import { Container } from '@drykiss/industry-ui'
import { Page } from '../../components/common/page/page'

const meta = {
  description: `
    DryKISS is a full service internet and mobile digital production house.
    Our services span consulting, strategy; planning; development; testing
    and analytics.
  `,
  path: '/policies/terms-conditions',
  title: 'DryKISS develops hybrid mobile and responsive websites'
}

const PageSiteMap = () => {
  return (
    <Page heroHeading="Terms and Condtions" meta={meta}>
      <Container>Terms and Condtions</Container>
    </Page>
  )
}

export default PageSiteMap
