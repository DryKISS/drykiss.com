/**
 * Components - Home - Contact
 */

// UI
import { Container, Divider, Heading } from 'industry-ui'
import { Text } from 'components'

// Style
import styled from 'styled-components'

export const Contact = () => {
  return (
    <Container>
      <Divider size='lg' />

      <StyledTitle
        content='If you have a great idea, now is the time to execute it. Contact us!'
        tag='h5'
      />

      <Text size='xxl'>+44 (0) 778 043 5329</Text>

      <Text size='xxl'>info@drykiss.com</Text>
    </Container>
  )
}

const StyledTitle = styled(Heading)`
  margin: 0 0 2rem 0;
`
