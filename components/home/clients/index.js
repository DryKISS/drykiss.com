/**
 * Components - Home - Clients
 *
 * Images: 256x162
 */

// UI
import { Column, Container, Heading, Image, MEDIA_QUERY, Row } from 'industry-ui'

// Style
import styled from 'styled-components'

// Data
import { ClientsData } from './data'

export const Clients = () => {
  return (
    <Container>
      <StyledHeading content='Trusted by the world’s companies including:' tag='h5' />

      <Row>
        {ClientsData.map(({ id, name }) => (
          <Column key={name} sm={6} lg={3}>
            <StyledContainer>
              <StyledImage alt={name} src={`/static/clients/${name}.svg`} title={name} />
            </StyledContainer>
          </Column>
        ))}
      </Row>
    </Container>
  )
}

const StyledTitle = styled(Heading)`
  margin: 0 0 2rem 0;
`

const StyledHeading = styled(StyledTitle)`
  text-align: center;
`

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-bottom: 2rem;
  min-height: 80px;
`

const StyledImage = styled(Image)`
  filter: grayscale(100%);
  width: 64%;

  ${MEDIA_QUERY.phone`
    width: 48%;
  `}
  ${MEDIA_QUERY.tablet`
    width: 40%;
  `}
`
