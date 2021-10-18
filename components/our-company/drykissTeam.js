import AC from '../adaptorComponent'
import { Row, Column, Image } from '@drykiss/industry-ui'

import { MaxContainer } from '../common/maxContainer'
import SectionTitleAndSubtitle from '../common/page/sectionTitleAndSubtitle'
import { css } from 'styled-components'
const drykissTeamData = [
  {
    name: 'Ian Warner',
    position: 'CEO',
    image: '/images/ourCompany/drykissTeam/1.png'
  },
  {
    name: 'Kristian Heruc',
    position: 'CTO',
    image: '/images/ourCompany/drykissTeam/2.png'
  },
  {
    name: 'Ali Sharafi',
    position: 'CPO',
    image: '/images/ourCompany/drykissTeam/4.jpg'
  },
  {
    name: 'May Tran',
    position: 'COO',
    image: '/images/ourCompany/drykissTeam/3.png'
  }
]

const DrykissTeam = () => {
  return (
    <>
      <SectionTitleAndSubtitle
        title="Meet the DryKISS team"
        subtitle="Our team comprises highly skilled professionals with over 20+ years of experience in web development, digital marketing, and tech consulting. We are bold, global, agile, lean, and love thinking outside the box"
        maxTextWidth="920px"
      />
      <AC as={MaxContainer} mb="6rem">
        <Row>
          {drykissTeamData.map((item, index) => {
            return (
              <Column lg={3} md={6} sm={12} key={'rr' + index}>
                <AC column>
                  <AC
                    as={Image}
                    src={item.image}
                    mb="0.75rem"
                    alt={item.name}
                    customCss={css`
                      filter: grayscale(1);
                    `}
                    borderRadius="8px"
                  />
                  <AC as="p" textSize="1.25rem" textColour="black" semiBold margin="0" mb="0.25rem">
                    {item.name}
                  </AC>
                  <AC as="p" textSize="0.8rem" textColour="#C7D3EE" bold margin="0">
                    {item.name}
                  </AC>
                </AC>
              </Column>
            )
          })}
        </Row>
      </AC>
    </>
  )
}
export default DrykissTeam
