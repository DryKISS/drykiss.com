/**
 * Our Work
 */

// UI
import { OurWorkList, Page } from 'components'

const PageOurWork = () => {
  const meta = {
    description: `DryKISS is a full service internet and mobile digital production house. Our
      services span consulting, strategy; planning; development; testing and analytics.`,
    path: '/our-work',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page
      heading='Projects we worked on'
      heroHeading='Our Work'
      heroSubHeading='Talk to us to transform your projects idea into a working digital products'
      meta={meta}
    >
      <OurWorkList />
    </Page>
  )
}

export default PageOurWork
