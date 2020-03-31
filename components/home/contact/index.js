/**
 * Components - Home - Contact
 */

// UI
import { Column, Heading, Image, Row } from 'industry-ui'
import { Text } from 'components'

// Style
import styled from 'styled-components'

export const Contact = () => {
  return (
    <>
      <StyledSubTitle
        content='If you have a great idea, now is the time to execute it. Contact us!'
        tag='h5'
      />

      <StyledImage alt='Services' src='/static/services/services.jpg' title='Services' />

      <Row>
        <Column md={12} lg={4}>
          <StyledH6 content='User Experience' tag='h6' />

          <Text>
            We help brands create valuable experiences across digital channels by focusing on the
            habits and needs of their audience.
          </Text>
        </Column>

        <Column md={6} lg={4}>
          <StyledH6 content='Creativity' tag='h6' />

          <Text>
            Focused creativity is the engine for all we do. Our cross-platform, and specifically
            mobile experience makes our approach always flexible, responsive and dynamic.
          </Text>
        </Column>

        <Column md={6} lg={4}>
          <StyledH6 content='Development' tag='h6' />

          <Text>
            By using the best and latest frameworks we are not re-inventing the wheel, but
            delivering projects based on known processes. This enables us to deliver cutting edge
            code quickly and within budget.
          </Text>
        </Column>
      </Row>
    </>
  )
}

const StyledTitle = styled(Heading)`
  margin: 0 0 2rem 0;
`

const StyledSubTitle = styled(StyledTitle)``

const StyledImage = styled(Image)`
  display: block;
  margin-bottom: 2rem;
`

const StyledH6 = styled(Heading)`
  margin: 0 0 0.5rem 0;
`
