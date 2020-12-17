/**
 * About
 */

import { Paragraph } from 'components'

// Layout
import { Column, Container, Row, Space } from '@drykiss/industry-ui'
import { ContactForm } from './form'

export const Contact = () => {
  return (
    <Container>
      <Paragraph
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.`}
      />

      <Space marginBottom='xxxl' />

      <Row>
        <Column xs={3} md={3}>
          <b>Phone</b>

          <Paragraph content='44 (0) 778 043 5329' />
        </Column>

        <Column xs={3} md={3}>
          <b>Email</b>

          <Paragraph content='Info@drykiss.com' />
        </Column>
      </Row>

      <Space marginBottom='xxxl' />

      <Row>
        <Column xs={12} md={8}>
          <ContactForm />
        </Column>
      </Row>
    </Container>
  )
}
