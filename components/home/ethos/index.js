/**
 * Components - Home - Ethos
 */

// UI
import { Container, MEDIA_QUERY, Space, Text } from 'industry-ui'

// Style
import styled from 'styled-components'

// Data
import { EthosData } from './data'

export const Ethos = () => {
  return (
    <Container>
      {EthosData.map(({ context, description, id, name }) => (
        <StyledWrapper key={`${id}${name}`}>
          <StyledTextWrapper>
            <Text context={context} size='xxxl'>
              {name}
            </Text>
          </StyledTextWrapper>

          <Text size='md'>{description}</Text>

          <Space marginBottom='xl' />
        </StyledWrapper>
      ))}
    </Container>
  )
}

const StyledWrapper = styled.div`
  margin-bottom: 2rem;
  border-bottom: 2px solid #000;
`

const StyledTextWrapper = styled.div`
  margin-bottom: 1rem;
  height: 2.35rem;
  overflow: hidden;
  ${MEDIA_QUERY.phone`
    height: 4.65rem;
  `}
  ${MEDIA_QUERY.tablet`
    height: 5.5rem;
  `}
  ${MEDIA_QUERY.desktop`
    height: 6.5rem;
  `}
  ${MEDIA_QUERY.giant`
    height: 7.25rem;
  `}
`
