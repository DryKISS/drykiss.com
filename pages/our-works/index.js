/**
 * Home
 */

// UI
import { MetaHead } from '@drykiss/industry-ui'
import { Brand, Canonical } from '../../config/config'
import SimplePageHeader from '../../components/common/head'
import OurWorksSection from '../../components/home/ourWorksSection'
import { WorksPageService } from '../../services/pages-services/worksService'

const meta = {
  description: `DryKISS is a full service internet and mobile digital production house. Our
    services span consulting, strategy; planning; development; testing and analytics.`,
  path: '/',
  title: 'DryKISS develops hybrid mobile and responsive websites'
}
export const getStaticProps = async () => {
  return WorksPageService.getWorks()
}

const OurWorks = ({ posts:works }) => {
  return (
    <>
      {meta && <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />}
      <SimplePageHeader
        title="Discover our works"
        sub="Lorem ipsum dolor sit amet, consectetuer"
        image="/images/our-works/head.svg"
      />
      <OurWorksSection {...{ works }} />
    </>
  )
}

export default OurWorks
