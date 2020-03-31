/**
 * Components - Home - Clients
 *
 * Images: 256x162
 */

// UI
import { Column, Container, Heading, Image, Row } from 'industry-ui'

// Style
import styled from 'styled-components'

// Data
import { ClientsData } from './data'

export const Clients = () => {
  return (
    <Container>
      <StyledTitle content='Clients' tag='h2' />
      <StyledSubTitle content='Trusted by the world’s companies including:' tag='h5' />

      <Row>
        {ClientsData.map(({ name }, index) => (
          <Column key={name + index} lg={3} md={6} sm={12}>
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

const StyledSubTitle = styled(StyledTitle)``

const StyledContainer = styled.div`
  align-items: center;
  background-color: #000;
  display: flex;
  flex-flow: row nowrap;
  height: 162px;
  justify-content: center;
`

const StyledImage = styled(Image)`
  width: 75%;
`
