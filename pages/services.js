/**
 * Home
 */

// UI

import { Image, Text, MetaHead, Row, Column } from '@drykiss/industry-ui'

import OurServicesRows from '../components/our-services/rows'
import OurWorksSection from '../components/home/ourWorksSection'
import AC from '../components/adaptorComponent'
import { Brand, Canonical } from '../config/config'
import { MaxContainer } from '../components/common/maxContainer'

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
      <AC as={MaxContainer} bgColour='light' pY='3rem' mb='3rem'>
        <AC as={Row} itemsCenter mdStyles={{ column: true, textCenter: true }}>
          <Column xs={12} md={6}>
            <AC as='h1' textSize='4rem' textColour='darkBlue' bold mb='2rem'>
              Our Services
            </AC>
            <AC as={Text} textSize='2.25rem' textColour='darkText' semiBold>
              We offer full-service web development and digital marketing
              solutions
            </AC>
          </Column>
          <Column xs={12} md={6}>
            <Image alt='Hero' src='/images/ourServices/head.svg' />
          </Column>
        </AC>
      </AC>

      <OurServicesRows />
      <OurWorksSection />
    </>
  )
}

export default OurServicesPage
