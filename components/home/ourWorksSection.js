import styled, { css } from 'styled-components'
import { MaxContainer } from '../common/maxContainer'
import AC from '../adaptorComponent'
import { Column, Row, Image, Text, Link } from '@drykiss/industry-ui'
import SectionTitleAndSubtitle from '../common/page/sectionTitleAndSubtitle'
import { PageAddresses } from '../../config/navigation'

const OurWorksSection = ({ works = [] }) => {
  return (
    <AC
      mdStyles={{
        pX: '2rem'
      }}
    >
      <SectionTitleAndSubtitle
        title="Discover our works"
        subtitle="We have helped many customers to
         transformed their ideas into a working digital products"
        maxTextWidth="1100px"
      />

      <AC as={MaxContainer} mb="3rem" mt="2rem">
        {works.map((item, index) => {
          return (
            <AC
              as={WrappedRow}
              key={'row' + index}
              pY="2rem"
              flexRowReverse={index % 2 === 0}
              bordered={index !== 0}
            >
              <AC
                as={Column}
                md={6}
                {...(index % 2 === 0 && { pr: '0.5rem' })}
                {...(index % 2 !== 0 && { pl: '0.5rem' })}
              >
                <AC as={TopImageWrapper}>
                  <AC as={Image} mY="1.5rem" src={item.icon.url} alt={item.title} />
                </AC>
                <AC as={StyledTitle} textColour="black" bold textSize="2rem">
                  {item.title}
                </AC>
                {item.shortDescs.map((desc, idx) => {
                  return (
                    <AC key={'desc' + idx} as={StyledDesc} textColour="darkGrey">
                      {desc.text}
                    </AC>
                  )
                })}
                {item.pageInfo && (
                  <AC
                    as={Link}
                    to={`${PageAddresses.OurWorks}/${item.id}`}
                    bold
                    textColour="primary"
                    mY="2.5rem"
                    textSize="0.75rem"
                  >
                    View case study
                  </AC>
                )}
              </AC>
              <AC
                as={Column}
                md={6}
                {...(index % 2 === 0 && { pl: '0.5rem' })}
                {...(index % 2 !== 0 && { pr: '0.5rem' })}
              >
                <AC
                  as={Image}
                  src={item.mainImage.formats?.medium?.url ?? item.mainImage.url}
                  alt={item.icon.url}
                  mdStyles={{
                    width: '100%',
                    ml: '1%'
                  }}
                />
              </AC>
            </AC>
          )
        })}
      </AC>
    </AC>
  )
}
const StyledDesc = styled(Text)`
  margin-bottom: 0.25rem;
`

const StyledTitle = styled(Text)`
  margin-bottom: 0.75rem;
`

const TopImageWrapper = styled.div`
  max-width: 120px; ;
`
const WrappedRow = styled(Row)`
  ${({ bordered }) =>
    bordered &&
    css`
      border-top: 1px solid #ebebeb;
    `}
`
export default OurWorksSection
