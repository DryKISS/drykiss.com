/**
 * Components - Home - Clients
 *
 * Images: 256x162
 */

// Style
import styled from 'styled-components'

// UI
import { Column, Container, Image, Row, Space } from '@drykiss/industry-ui'
import { SectionHeading } from '../common/typography/sectionHeading'
import { clientsData } from './data'
import AC from '../adaptorComponent'

export const HomeClients = () => {
  return (
    <StyledWrapper>
      <Container>
        <SectionHeading content="Our happy Customers" />

        <StyledRow>
          {clientsData.map((client) => (
            <AC as={Column} xs={12} md={6} lg={3} key={client.name} center>
              <AC
                as={StyledImage}
                alt={client.name}
                src={`/images/clients/${client.name}.svg`}
                title={client.name}
                pointer
              />
            </AC>
          ))}
        </StyledRow>
      </Container>

      <Space marginBottom="xxxl" />
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
  /* filter: grayscale(100%); */
  transition: all 0.1s ease-in-out;
  height: 50px;
  object-fit: contain;

  :hover {
    filter: none;
  }
`
