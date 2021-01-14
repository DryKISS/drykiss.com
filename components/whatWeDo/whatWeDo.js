/**
 * What we do
 */

import { Paragraph, SectionHeading, SectionSubHeading } from 'components'

// Styled
import styled from 'styled-components'

// Layout
import { Column, Container, Image, Row, Space } from '@drykiss/industry-ui'

export const WhatWeDo = () => {
  return (
    <Container>
      <Row align='center'>
        <Column sm={12} md={6}>
          <StyledImage src='/images/services/responsive.svg' />
        </Column>

        <Column sm={12} md={6}>
          <SectionSubHeading content='Responsive development' />

          <Paragraph content='Crafting responsive, accessibility and mobile first sites is something we love. Developing a mobile friendly MVP is not only a user requirement but will help improve SEO.' />
        </Column>
      </Row>

      <Space marginBottom='xxl' />

      <Row align='center'>
        <Column sm={12} md={6}>
          <SectionSubHeading content='MVP Prototyping' />

          <Paragraph content='Using CodeBlender our React component library. DryKISS can rapidly deliver any kind of MVP to answer user research questions. We have already delivered a TV EPG; mobile apps; one page sites and email newsletters.' />
        </Column>

        <Column sm={12} md={6}>
          <StyledImage src='/images/services/mvp.svg' />
        </Column>
      </Row>

      <Space marginBottom='xxl' />

      <Row align='center'>
        <Column sm={12} md={6}>
          <StyledImage src='/images/services/hybrid.svg' />
        </Column>

        <Column sm={12} md={6}>
          <SectionSubHeading content='Hybrid mobile development' />

          <Paragraph content='Utilising the latest technologies such as React Native, DryKISS can deliver cross-platform HTML5 and JavaScript mobile applications.' />
        </Column>
      </Row>

      <Space marginBottom='xxl' />

      <Row align='center'>
        <Column sm={12} md={6}>
          <SectionSubHeading content='SEO' />

          <Paragraph content='DryKISS has over 20 years experience in web technologies and SEO has always been a key part for every project. We can assist with all the necessary research to identify the phrases and content strategies you need.' />
        </Column>

        <Column sm={12} md={6}>
          <StyledImage src='/images/services/seo.svg' />
        </Column>
      </Row>

      <Space marginBottom='xxl' />

      <Row align='center'>
        <Column sm={12} md={6}>
          <StyledImage src='/images/services/marketing.svg' />
        </Column>

        <Column sm={12} md={6}>
          <SectionSubHeading content='Digital Social Marketing' />

          <Paragraph content='Crafting responsive, accessibility and mobile first sites is something we love. Developing a mobile friendly MVP is not only a user requirement but will help improve SEO.' />
        </Column>
      </Row>

      <Space marginBottom='xxl' />

      <Row align='center'>
        <Column sm={12} md={6}>
          <SectionSubHeading content='Pricing' />

          <Paragraph content='DryKISS can strategise, plan and curate a social marketing plan for your business. Posting content on Facebook, Twitter, LinkedIn and all other social networks.' />
        </Column>

        <Column sm={12} md={6}>
          <StyledImage src='/images/services/pricing.svg' />
        </Column>
      </Row>

      <Space marginBottom='xxl' />
    </Container>
  )
}

const StyledImage = styled(Image)`
  width: 100%;
  max-height: 250px;
`
