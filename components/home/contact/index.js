/**
 * Components - Home - Contact
 */

// UI
import { Container, Heading } from 'industry-ui'
import { Text } from 'components'

// Style
import styled from 'styled-components'

export const Contact = () => {
  return (
    <Container>
      <StyledSubTitle
        content='If you have a great idea, now is the time to execute it. Contact us!'
        tag='h5'
      />

      <Text size='xxxl'>+44 (0) 778 043 5329</Text>

      <Text size='xxxl'>info@drykiss.com</Text>
    </Container>
  )
}

const StyledTitle = styled(Heading)`
  margin: 0 0 2rem 0;
`

const StyledSubTitle = styled(StyledTitle)``