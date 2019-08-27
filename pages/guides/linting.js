/**
 * Guides - Linting
 */

// Layout
import { Page } from 'layout/page'

// UI
import {
  Column,
  Container,
  Blockquote,
  Row
} from 'industry-ui'

export default () => {
  const meta = {
    description: `
      DryKISS utilise StandardJS for all JavaScript Linting. We love the ease of
      configuration and plug and play nature of this library.
    `,
    path: '/',
    title: 'JavaScript Linting is a Crucial CI Component.'
  }

  return (
    <Page meta={meta}>

      <Container>

        <Blockquote text='JavaScript Linting' />

        <Row>

          <Column lg={3}>

            <p>
              JavaScript Linting is cruical for the consistency of the code
              written by the development team.
            </p>

          </Column>

        </Row>

      </Container>

    </Page>
  )
}
