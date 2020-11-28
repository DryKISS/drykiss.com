/**
 * Our Work
 */

// Styled Components
import styled from 'styled-components'

// UI
import { Card, Column, Container, Image, Space, Row } from '@drykiss/industry-ui'
import { Paragraph } from '../..'

export const OurWorkList = ({ items }) => {
  const renderPortfolio = () =>
    items.map(({ active, client, slug, title, type }, index) => {
      if (active) {
        return (
          <StyledItem key={index}>
            <Card
              bordered
              footer={title}
              shadow
              to={{
                href: {
                  pathname: `/our-work/${type}/${slug}`
                }
              }}
            >
              <Image alt={title} src={`/images/portfolio/${client}/${slug}/hero.png`} />
            </Card>
          </StyledItem>
        )
      }
    })

  return (
    <Container>
      <Paragraph content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea' />

      <Space marginBottom='xxxl' />

      <Row>{renderPortfolio()}</Row>
    </Container>
  )
}

const StyledItem = styled(Column).attrs(() => ({
  md: 6,
  lg: 3
}))`
  margin-bottom: 2rem;
`
