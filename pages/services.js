/**
 * Home
 */

// UI
import { MetaHead} from '@drykiss/industry-ui'
import OurServicesRows from '../components/our-services/rows'
import OurWorksSection from '../components/home/ourWorksSection'
import { Brand, Canonical } from '../config/config'
import LetsTalkSection from '../components/our-services/letsTalkSection'
import SimplePageHeader from '../components/common/head'

const meta = {
  description: `DryKISS is a full service internet and mobile digital production house. Our
    services span consulting, strategy; planning; development; testing and analytics.`,
  path: '/',
  title: 'DryKISS develops hybrid mobile and responsive websites'
}

const OurServicesPage = () => {
  return (
    <>
      {meta && (
        <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />
      )}
      <SimplePageHeader
        title='Our Services'
        sub='We offer full-service web development and digital marketing solutions'
				image='/images/our-services/head.svg'
      />
      <OurServicesRows />
      <OurWorksSection />
      <LetsTalkSection />
    </>
  )
}

export default OurServicesPage
