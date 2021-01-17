/**
 * Team
 */

// UI
import { Container, Column, Row, Space, Text } from '@drykiss/industry-ui'
import { TeamCard } from './card'

export const Team = ({ members }) => {
  return (
    <Container>
      <Text>
        At DryKISS, we offer full service web development and marketing solutions to meet all your
        business, startup and minimum viable product needs. We are prepared to listen to your every
        desire so we can perfectly craft your projects, bring to life your ideas and boost your
        revenue.
      </Text>

      <Space />

      <Text>
        Our team comprises of highly skilled professionals with over 20+ years of experiences in web
        development, digital marketing, SEO and tech consulting. We are bold, global, agile, lean
        and love thinking outside the box.
      </Text>

      <Space />

      <Row>
        {members.map(member => (
          <Column key={member.id} lg={3}>
            <TeamCard data={member} />
          </Column>
        ))}
      </Row>

      <Space marginBottom='xxl' />
    </Container>
  )
}
