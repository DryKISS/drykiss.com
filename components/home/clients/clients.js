/**
 * Components - Home - Clients
 *
 * Images: 256x162
 */

// UI
import { Carousel, Container, Image } from '@drykiss/industry-ui'

// Style
import styled from 'styled-components'

// Components
import { CarouselNav, SectionHeading } from 'components'
import { clientsData } from './data'

export const HomeClients = () => {
  return (
    <Container>
      <SectionHeading content='Our Clients' />

      <Carousel
        fullWidth
        height='50px'
        leftNavComponent={<CarouselNav left />}
        rightNavComponent={<CarouselNav right />}
        numberOfItems={{
          576: 1,
          768: 2,
          992: 3,
          1200: 4
        }}
        slides={clientsData.map(client => ({
          node: (
            <StyledImage
              alt={client.name}
              src={`/images/clients/${client.name}.svg`}
              title={client.name}
            />
          ),
          text: ' '
        }))}
      />
    </Container>
  )
}

const StyledImage = styled(Image)`
  filter: grayscale(100%);
  transition: all 0.1s ease-in-out;
  height: 100%;
  object-fit: contain;

  :hover {
    filter: none;
  }
`
