/**
 * Our Work
 */

// UI
import { OurWorkList, Page } from 'components'

// Data
import { PORTFOLIO_FACEBOOK, PORTFOLIO_MOBILE, PORTFOLIO_SITES, PORTFOLIO_WORDPRESS } from 'data'

const DATA = [
  ...PORTFOLIO_SITES,
  ...PORTFOLIO_FACEBOOK,
  ...PORTFOLIO_WORDPRESS,
  ...PORTFOLIO_MOBILE
]

export async function getStaticProps () {
  return {
    props: { namespacesRequired: ['use-cases-show'], works: DATA }
  }
}

const PageOurWork = ({ works }) => {
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
      <OurWorkList items={works} />
    </Page>
  )
}

export default PageOurWork
