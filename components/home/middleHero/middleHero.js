/**
 * Components - Home - Our Methodology
 */

// UI
import { Container, Column, Image, Row, Space } from '@drykiss/industry-ui'

// Style
import styled from 'styled-components'

// Components
import { Paragraph } from 'components'

export const HomeMiddleHero = () => {
  return (
    <StyledWrapper>
      <Container>
        <Row>
          <Column sm={12} md={6}>
            <Image src='/images/home/services.svg' />
          </Column>

          <Column sm={12} md={6}>
            <StyledParagraph content='We help brands create valuable experiences across digital channels by focusing on the habits and needs of their audience.' />
            <Space marginBottom='xxxl' />

            <StyledParagraph content='Focused creativity is the engine for all we do. Our cross-platform, and specifically mobile experience makes our approach always flexible, responsive and dynamic.' />
            <Space marginBottom='xxxl' />

            <StyledParagraph content='By using the best and latest frameworks we are not re-inventing the wheel, but delivering projects based on known processes. This enables us to deliver cutting edge code quickly and within budget.' />
          </Column>
        </Row>
      </Container>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.COLOUR.gray90};
  padding: 56px 0;
`

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.COLOUR.white};
`
