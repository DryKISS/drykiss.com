import { Image, Column, Space, Row, Text } from '@drykiss/industry-ui'
import styled from 'styled-components'
import AC from '../adaptorComponent'
import { MaxContainer } from '../common/maxContainer'
import SectionTitleAndSubtitle from '../common/page/sectionTitleAndSubtitle'

const serviceCardsData = [
  {
    title: 'Startup Solutions',
    image: '/images/services/1.svg',
    bullets: [
      'Prototype Design',
      ' Single Feature MVP',
      ' Pilot MVP Development',
      ' UI/UX Design',
      ' Website Design',
      ' CMS Solutions'
    ]
  },
  {
    title: 'Development',
    image: '/images/services/2.svg',
    bullets: [
      'Web Application',
      'Mobile App Development',
      'Cloud / SassDevelopment',
      'E-Commerce Solutions',
      'Custome Software'
    ]
  },
  {
    title: 'Digital Marketing',
    image: '/images/services/3.svg',
    bullets: [
      'Content Marketing',
      'Social Media Management',
      'Social Media Marketing ',
      'SEO',
      'PPC',
      'Email Markeitng'
    ]
  }
]

const OurServicesSection = () => {
  return (
    <>
      <SectionTitleAndSubtitle
        title="Our Services"
        subtitle="  During 10+ years we have exceled services which
         can help your digital needs. We offer
              full -service web development and marketing solution"
      />

      <AC as={MaxContainer} mb="6rem">
        <Row>
          {serviceCardsData.map((data, index) => {
            return (
              <AC
                key={index}
                as={Column}
                md={4}
                sm={12}
                center
                smStyles={{
                  pX: '2rem',
                  mt: '2rem'
                }}
              >
                <AC as={CardWrapper} fullWidth elevation={1} pY="2rem" pX="1rem">
                  <Space marginBottom="md">
                    <AC
                      as={Text}
                      textColour="darkGeryText"
                      bold
                      size="md"
                      smStyles={{
                        textColour: 'black'
                      }}
                    >
                      {data.title}
                    </AC>
                  </Space>
                  <AC flex itemsStart>
                    <Image src={data.image} alt={data.title} />
                    <BulletsContainer>
                      {data.bullets.map((bullet, idx) => (
                        <AC key={'bullet' + idx} as="li" textColour="darkGeryText">
                          {bullet}
                        </AC>
                      ))}
                    </BulletsContainer>
                  </AC>
                </AC>
              </AC>
            )
          })}
        </Row>
      </AC>
    </>
  )
}
const BulletsContainer = styled.ul`
  margin: 0;
`
const CardWrapper = styled.div`
  width: calc(100% - 0.75rem);
  min-height: 270px;
`
export default OurServicesSection
