import styled, { css } from 'styled-components'
import { MaxContainer } from '../common/maxContainer'
import AC from '../adaptorComponent'
import { Column, Row, Image, Text, Link } from '@drykiss/industry-ui'
import SectionTitleAndSubtitle from '../common/page/sectionTitleAndSubtitle'

const ourWorksData = [
  {
    descriptionTopImage: '/images/clients/ibm.svg',
    title: 'Customer 1 Work',
    image: '/images/ourWorks/1.png',
    descs: [
      "DryKISS completed what is the most ambitious digital marketing build for Deliveroo in it's history.",
      'They required in a short development window the development of a global site for their #AnyExcuse campaign.'
    ],
    bottomLink: {
      to: '',
      title: 'View case study'
    }
  },
  {
    descriptionTopImage: '/images/clients/deliveroo.svg',
    title: 'Deliveroo Excuse Generator',
    image: '/images/ourWorks/2.png',
    descs: [
      "DryKISS completed what is the most ambitious digital marketing build for Deliveroo in it's history.",
      'They required in a short development window the development of a global site for their #AnyExcuse campaign.'
    ],
    bottomLink: {
      to: '',
      title: 'View case study'
    }
  },
  {
    descriptionTopImage: '/images/clients/homyze.svg',
    title: 'Homyze Cleverly',
    image: '/images/ourWorks/3.png',
    descs: [
      "DryKISS completed what is the most ambitious digital marketing build for Deliveroo in it's history.",
      'They required in a short development window the development of a global site for their #AnyExcuse campaign.'
    ],
    bottomLink: {
      to: '',
      title: 'View case study'
    }
  }
]

export default function OurWorksSection() {
  return (
    <>
      <SectionTitleAndSubtitle
        title="Discover our works"
        subtitle="We have helped many customers to
         transformed their ideas into a working digital products"
        maxTextWidth="1100px"
      />

      <AC as={MaxContainer} mb="6rem" mt="2rem">
        {ourWorksData.map((item, index) => {
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
                  <AC as={Image} mY="1.5rem" src={item.descriptionTopImage} />
                </AC>
                <AC textColour="black" bold textSize="2rem" mb="0.75rem">
                  {item.title}
                </AC>
                {item.descs.map((desc, idx) => {
                  return (
                    <AC key={'desc' + idx} as={Text} textColour="darkGrey" mb="0.25rem">
                      {desc}
                    </AC>
                  )
                })}
                <AC
                  as={Link}
                  to={item.bottomLink.to}
                  bold
                  textColour="primary"
                  mY="2.5rem"
                  textSize="0.75rem"
                >
                  {item.bottomLink.title}
                </AC>
              </AC>
              <AC
                as={Column}
                md={6}
                {...(index % 2 === 0 && { pl: '0.5rem' })}
                {...(index % 2 !== 0 && { pr: '0.5rem' })}
              >
                <Image src={item.image} />
              </AC>
            </AC>
          )
        })}
      </AC>
    </>
  )
}
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
