/**
 * Home
 */

// UI
import { HomeClients } from '../components/home/clients'

import { Page } from '../components/common/page/page'
import LetsTalk from '../components/common/page/home/letsTalk'
import HomeSubHeading from '../components/common/page/home/subHeading'
import AC from '../components/adaptorComponent'
import OurServicesSection from '../components/home/ourServicesSection'
import OurWorksSection from '../components/home/ourWorksSection'
import InsightsSection from '../components/home/insightsSection'
import ContactUsSection from '../components/home/contactUsSection'

const meta = {
  description: `DryKISS is a full service internet and mobile digital production house. Our
    services span consulting, strategy; planning; development; testing and analytics.`,
  path: '/',
  title: 'DryKISS develops hybrid mobile and responsive websites'
}

const PageIndex = () => {
  return (
    <Page
      heroHeading="We do MVPs"
      heroImage="/images/home/hero.png"
      onImage={<LetsTalk />}
      heroSubHeading={<HomeSubHeading />}
      meta={meta}
    >
      <AC as={HomeClients} textSize="1rem" />
      <OurServicesSection />
      <OurWorksSection />
      <InsightsSection />
      <ContactUsSection />
      {/* <HomeWhoWeAre />
      <Space marginBottom="xxxl" />
      <HomeOurMethodology />
      <HomeMiddleHero />
      <Space marginBottom="xxxl" />
      <HomeOurWorks />
      <Space marginBottom="xxxl" />
      <HomeClients /> */}
    </Page>
  )
}

export default PageIndex
