/**
 * Our Work
 */

// UI
import { OurWorkList } from '../../components/ourWork/list'
import { Page } from '../../components/common/page/page'
import { PORTFOLIO_FACEBOOK } from '../../data/portfolio/facebook'
import { PORTFOLIO_MOBILE } from '../../data/portfolio/mobile'
import { PORTFOLIO_SITES } from '../../data/portfolio/sites'
import { PORTFOLIO_WORDPRESS } from '../../data/portfolio/wordpress'

const DATA = [
  ...PORTFOLIO_SITES,
  ...PORTFOLIO_FACEBOOK,
  ...PORTFOLIO_WORDPRESS,
  ...PORTFOLIO_MOBILE
]

const meta = {
  description: `DryKISS is a full service internet and mobile digital production house. Our
    services span consulting, strategy; planning; development; testing and analytics.`,
  path: '/our-work',
  title: 'DryKISS develops hybrid mobile and responsive websites'
}

export async function getStaticProps() {
  return {
    props: { works: DATA }
  }
}

const PageOurWork = ({ works }) => {
  return (
    <Page
      heading="Our Projects"
      heroHeading="Our Work"
      heroSubHeading="Transform your idea into a working digital product"
      meta={meta}
    >
      <OurWorkList items={works} />
    </Page>
  )
}

export default PageOurWork
