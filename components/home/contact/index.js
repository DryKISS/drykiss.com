/**
 * Components - Home - Contact
 */

// UI
import { Container, Divider, Heading, Space, Text } from 'industry-ui'

export const Contact = () => {
  return (
    <Container>
      <Divider size='lg' />

      <Heading
        content='If you have a great idea, now is the time to execute it. Contact us!'
        tag='h5'
      />

      <Space marginBottom='xl' />

      <Text size='xxl'>+44 (0) 778 043 5329</Text>
      <Text size='xxl'>info@drykiss.com</Text>
    </Container>
  )
}
