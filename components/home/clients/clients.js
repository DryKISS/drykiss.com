/**
 * Components - Home - Clients
 *
 * Images: 256x162
 */

// UI
import { Column, Container, Image, Row, Space } from '@drykiss/industry-ui'

// Style
import styled from 'styled-components'

// Components
import { SectionHeading } from 'components'
import { clientsData } from './data'
// import { HomeTestimonial } from './testimonial'

export const HomeClients = () => {
  return (
    <StyledWrapper>
      <Container>
        <SectionHeading content='Our Clients' />

        <StyledRow>
          {clientsData.map(client => (
            <Column xs={6} md={3} key={client.name}>
              <StyledImage
                alt={client.name}
                src={`/images/clients/${client.name}.svg`}
                title={client.name}
              />
            </Column>
          ))}
        </StyledRow>
      </Container>

      <Space marginBottom='xxxl' />
      {/* <HomeTestimonial /> */}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.COLOUR.white} url('/images/hero/pattern-2.svg') no-repeat left
    bottom;
  padding-bottom: 40px;
`

const StyledRow = styled(Row)`
  text-align: center;
`

const StyledImage = styled(Image)`
  filter: grayscale(100%);
  transition: all 0.1s ease-in-out;
  height: 50px;
  object-fit: contain;

  :hover {
    filter: none;
  }
`
