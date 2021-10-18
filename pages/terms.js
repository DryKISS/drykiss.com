/**
 * Home
 */

// UI

import { MetaHead } from '@drykiss/industry-ui'

import { Brand, Canonical } from '../config/config'
import SimplePageHeader from '../components/common/head'
import AC from '../components/adaptorComponent'
import { MaxContainer } from '../components/common/maxContainer'

const meta = {
  description: `DryKISS is a full service internet and mobile digital production house. Our
    services span consulting, strategy; planning; development; testing and analytics.`,
  path: '/',
  title: 'DryKISS develops hybrid mobile and responsive websites'
}

const termsData = ['To be confirmed']

const TermsPage = () => {
  return (
    <>
      {meta && <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />}
      <SimplePageHeader
        title="Terms and Conditions"
        sub="Lorem ipsum dolor sit amet, consectetuer"
        image="/images/terms/head.svg"
      />
      <AC as={MaxContainer} mb="6rem">
        <AC as="h1" textColour="primary" textSize="1.5rem" bold>
          Terms and Conditions
        </AC>
        {termsData.map((item, index) => {
          return (
            <AC key={'item' + index} as="p" textSize="1rem" lineHeight="1.75rem">
              {item}
            </AC>
          )
        })}
      </AC>
    </>
  )
}

export default TermsPage
