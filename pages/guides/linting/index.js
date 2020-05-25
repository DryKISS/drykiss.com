/**
 * Guides - Linting
 */

// UI
import { Column, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
      DryKISS utilise StandardJS for all JavaScript Linting. We love the ease of
      configuration and plug and play nature of this library.
    `,
    path: '/guides/linting',
    title: 'JavaScript Linting is a Crucial CI Component.'
  }

  return (
    <Page pageHeading={{ heading: 'JavaScript Linting' }} meta={meta}>
      <Row>
        <Column lg={3}>
          <p>
            JavaScript Linting is cruical for the consistency of the code written by the development
            team.
          </p>
        </Column>
      </Row>
    </Page>
  )
}
