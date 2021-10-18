/**
 * Career
 */

// UI

import { MetaHead, Column, Image, Link, Row } from '@drykiss/industry-ui'

import { Brand, Canonical } from '../../config/config'
import SimplePageHeader from '../../components/common/head'
import AC from '../../components/adaptorComponent'
import { MaxContainer } from '../../components/common/maxContainer'

const meta = {
  description: `DryKISS is a full service internet and mobile digital production house. Our
    services span consulting, strategy; planning; development; testing and analytics.`,
  path: '/',
  title: 'DryKISS develops hybrid mobile and responsive websites'
}

const careerData = [
  {
    title: 'Senior React Developer',
    sub: 'Full-time position',
    image: '/images/career/react.svg',
    department: 'Development',
    to: '/career/1.js'
  },
  {
    title: 'Senior React Developer',
    sub: 'Full-time position',
    image: '/images/career/react.svg',
    department: 'Development',
    to: '/career/1.js'
  },
  {
    title: 'Senior React Developer',
    sub: 'Full-time position',
    image: '/images/career/react.svg',
    department: 'Development',
    to: '/career/1.js'
  }
]

const CareerPage = () => {
  return (
    <>
      {meta && <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />}
      <SimplePageHeader
        title="Careers"
        sub="Lorem ipsum dolor sit amet, consectetuer"
        image="/images/career/head.svg"
      />
      <AC
        as={MaxContainer}
        mb="6rem"
        mdStyles={{
          pX: '1.5rem'
        }}
      >
        <AC as="h1" textColour="darkBlue" textSize="2.25" bold>
          Join the DryKiss Squad
        </AC>
        <AC as="p" textSize="0.75rem" lineHeight="21px" textColour="darkText">
          At DryKISS, we thrive on being the best; we love to continually learn, use the latest
          technologies and prototype everything. Our main goal though is to keep our clients and
          their customers happy. We do this by crafting top notch Accessible and SEO friendly sites.
          Quality is essential around everything we do.
        </AC>
        <AC as="p" textSize="0.75rem" lineHeight="21px" textColour="darkText">
          We are looking to expand what we do to Valencia, a city we have fallen in love with. We
          believe it promotes the work life balance that is so essential these days. We can work
          hard and sleep easy. If you are passionate about quality, entrepreneurial at heart and
          have a passion for what you do then please get in touch.
        </AC>
        <AC as="h2" textSize="1.25rem" textColour="secondary" mt="3rem" semiBold>
          Current Job Opennings
        </AC>
        <AC as={Row}>
          {careerData.map((item, index) => {
            return (
              <AC key={'ii' + index} as={Column} sm={12} md={6} pX="0.25rem">
                <AC
                  as={Link}
                  to={item.to}
                  flex
                  itemsCenter
                  borderColour=" #CCCCCC"
                  borderRadius="0.5rem"
                  mY="0.25rem"
                  pr="1rem"
                >
                  {' '}
                  <AC as={Image} src={item.image} alt={item.title} mr="1rem" />
                  <AC flexColumn>
                    <AC as="p" margin="0" textColour="#777777" semiBold textSize="1.25rem">
                      {item.title}
                    </AC>
                    <AC as="p" margin="0" textColour="#777777" textSize="0.75rem">
                      {item.sub}
                    </AC>
                  </AC>
                  <AC flexFiller />
                  <AC as="p" textColour="primary" textSize="0.75rem" margin="0">
                    {item.department}
                  </AC>
                </AC>
              </AC>
            )
          })}
        </AC>
      </AC>
    </>
  )
}

export default CareerPage
