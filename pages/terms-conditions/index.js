/**
 * Terms and Conditions
 */

// Config
import { BRAND, URL_BASE } from 'config'

// UI
import {
  Container,
  MetaHead,
  PageHeading
} from 'industry-ui'

const TermsConditions = () => {
  const meta = {
    canonical: URL_BASE,
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    title: `DryKISS develops hybrid mobile and responsive websites`
  }

  return (
    <>

      <MetaHead meta={meta} brand={BRAND} />

      <Container>

        <PageHeading
          heading='Terms and Conditions'
          strapline='Terms and Conditions'
        />

      </Container>

    </>
  )
}

export default TermsConditions
