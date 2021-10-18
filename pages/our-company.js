/**
 * Home
 */

// UI
import { MetaHead } from '@drykiss/industry-ui'
import { Brand, Canonical } from '../config/config'
import SimplePageHeader from '../components/common/head'
import WhoWeAreSection from '../components/our-company/whoWeAreSection'
import WhyDrykissSection from '../components/our-company/whyDrykissSection'
import OurApproachSection from '../components/our-company/ourApproachSection'
import DrykissTeam from '../components/our-company/drykissTeam'
import OurWorksSection from '../components/home/ourWorksSection'
import LetsTalkSection from '../components/our-services/letsTalkSection'

const meta = {
  description: `DryKISS is a full service internet and mobile digital production house. Our
    services span consulting, strategy; planning; development; testing and analytics.`,
  path: '/',
  title: 'DryKISS develops hybrid mobile and responsive websites'
}

const OurCompanyPage = () => {
  return (
    <>
      {meta && (
        <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />
      )}
      <SimplePageHeader
        title='Our Company'
        sub="We don't repeat our selves and keep it simple"
        image='/images/our-company/head.svg'
      />
      <WhoWeAreSection />
			<WhyDrykissSection />
			<OurApproachSection />
			<DrykissTeam />
			<OurWorksSection/>
			<LetsTalkSection />
    </>
  )
}

export default OurCompanyPage
