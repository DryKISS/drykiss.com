/**
 * Home
 */

// UI
import { Space } from '@drykiss/industry-ui'
import {
  HomeClients,
  Page,
  HomeMiddleHero,
  HomeOurMethodology,
  HomeOurWorks,
  HomeWhoWeAre
} from 'components'

const PageIndex = () => {
  const meta = {
    description: `DryKISS is a full service internet and mobile digital production house. Our
      services span consulting, strategy; planning; development; testing and analytics.`,
    path: '/',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page
      heading='We do MVPs'
      heroImage='images/home/hero.png'
      meta={meta}
      subHeading='Talk to us to transform your projects idea into a working digital products'
    >
      <HomeWhoWeAre />
      <Space marginBottom='xxxl' />

      <HomeOurMethodology />

      <HomeMiddleHero />
      <Space marginBottom='xxxl' />

      <HomeOurWorks />
      <Space marginBottom='xxxl' />

      <HomeClients />
    </Page>
  )
}

export default PageIndex
