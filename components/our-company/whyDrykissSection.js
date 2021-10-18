import SectionTitleAndSubtitle from '../common/page/sectionTitleAndSubtitle'
import AC from '../adaptorComponent'
import { Column, Row, Image, Text } from '@drykiss/industry-ui'
import { css } from 'styled-components'
import { MaxContainer } from '../common/maxContainer'

const whyDrykissData = [
  [
    {
      image: '/images/our-company/why-drykiss/1.svg'
    },
    {
      text:
        'We bring technical and business expertise - translate your idea into features and roadmaps.'
    },
    {
      image: '/images/our-company/why-drykiss/2.svg'
    }
  ],
  [
    {
      text:
        'We help you build value - by applying an honest and ethical approach to collaboration.'
    },
    {
      image: '/images/our-company/why-drykiss/3.svg'
    },
    {
      text:
        'We promote business growth - build a great product or service with minimum time and risk.'
    }
  ]
]

const WhyDrykissSection = () => {
  return (
    <>
      <SectionTitleAndSubtitle
        title='Why DryKISS'
        subtitle="When you need superheroes for your project, with minimum fuss, Don't Repeat Yourself and Keep It Simple Stupid with DryKISS."
        maxTextWidth='815px'
      />
      <AC
        as='p'
        maxWidth='725px'
        mY='4rem'
        mX='auto'
        textColour='darkText'
        textSize='1rem'
        lineHeight='1.4rem'
        textCenter
      >
        With over 20+ years experience, we understand your challenges and want
        to help you learn about your users, business requirements and solve
        customer pain points. We are a full-service software development
        company; building deliverables from early stages to successful projects.
      </AC>
      <AC as={MaxContainer} mb='4rem'>
        {whyDrykissData.map((item, index) => {
          return (
            <AC
              key={'wrow' + index}
              as={Row}
              mdStyles={{
                pX: '1rem'
              }}
            >
              {item.map((content, idx) => {
                const isImage = !!content.image
                const isText = !!content.text
                return (
                  <AC
                    key={'wcol' + idx}
                    as={Column}
                    customCss={css`
                      padding: 0;
                    `}
                    lg={4}
                    md={6}
                    sm={12}
                    minHeight='263px'
                    {...(isImage && { bgColour: '#E7F2FC' })}
                    center
                  >
                    {isText && (
                      <AC
                        as='p'
                        pX='2.25rem'
                        textColour='#999999'
                        textSize='1.25rem'
                        textCenter
                      >
                        {content.text}
                      </AC>
                    )}
                    {isImage && (
                      <AC as={Image} alt={content.image} src={content.image} />
                    )}
                  </AC>
                )
              })}
            </AC>
          )
        })}
      </AC>
    </>
  )
}

export default WhyDrykissSection
