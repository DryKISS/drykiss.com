/**
 * Components - Home - Our Works
 */

// UI
import { Container, Column, Image, Row } from '@drykiss/industry-ui'

// Style
import styled from 'styled-components'

// Components
import { Paragraph, SectionHeading, SectionSubHeading } from 'components'

export const HomeWhoWeAre = () => {
  return (
    <Container>
      <SectionHeading content='Who We Are' />

      <Row>
        <Column sm={12} md={6}>
          <StyledImage src='images/placeholder/lime-banner.svg' />
        </Column>

        <Column sm={12} md={6}>
          <SectionSubHeading content='We are DryKiss' />

          <Paragraph content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' />
        </Column>
      </Row>
    </Container>
  )
}

const StyledImage = styled(Image)`
  width: 100%;
`
