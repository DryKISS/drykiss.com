/**
 * Components - Home - Services
 */

// UI
import { Column, Container, Heading, Image, Row } from 'industry-ui'
import { Space, Text } from 'components'

export const Services = () => {
  return (
    <Container>
      <Heading content='Services' tag='h2' />

      <Heading
        content='We pride ourselves on offering a full-service, economic and future technology approach.'
        tag='h5'
      />

      <Image alt='Services' src='/static/services/services.jpg' title='Services' />
      <Space marginBottom='xl' />
      <Row>
        <Column md={12} lg={4}>
          <Heading content='User Experience' tag='h6' />

          <Text>
            We help brands create valuable experiences across digital channels by focusing on the
            habits and needs of their audience.
          </Text>
          <Space marginBottom='xl' />
        </Column>

        <Column md={6} lg={4}>
          <Heading content='Creativity' tag='h6' />

          <Text>
            Focused creativity is the engine for all we do. Our cross-platform, and specifically
            mobile experience makes our approach always flexible, responsive and dynamic.
          </Text>
          <Space marginBottom='xl' />
        </Column>

        <Column md={6} lg={4}>
          <Heading content='Development' tag='h6' />

          <Text>
            By using the best and latest frameworks we are not re-inventing the wheel, but
            delivering projects based on known processes. This enables us to deliver cutting edge
            code quickly and within budget.
          </Text>
          <Space marginBottom='xl' />
        </Column>
      </Row>
    </Container>
  )
}
