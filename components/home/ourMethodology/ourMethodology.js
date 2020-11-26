/**
 * Components - Home - Our Methodology
 */

// UI
import { Container, Column, Image, Row, Space } from '@drykiss/industry-ui'

// Style
import styled from 'styled-components'

// Components
import { Paragraph, SectionHeading, SectionSubHeading } from 'components'

export const HomeOurMethodology = () => {
  return (
    <StyledWrapper>
      <Container>
        <SectionHeading content='Our Methodology' />

        <Row>
          <Column sm={12} md={6}>
            <SectionSubHeading content='We Create MVP' />

            <Paragraph content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' />
          </Column>

          <Column sm={12} md={6}>
            <Image src='images/home/shatels.svg' />
          </Column>
        </Row>

        <Space size='xxxl' />

        <Row>
          <Column sm={12} md={6}>
            <Image src='images/home/shatels.svg' />
          </Column>

          <Column sm={12} md={6}>
            <SectionSubHeading content='We Create MVP' />

            <Paragraph content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' />
          </Column>
        </Row>
      </Container>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.COLOUR.white} url('images/hero/pattern-2.svg') no-repeat right
    bottom;
  padding-bottom: 40px;
`
