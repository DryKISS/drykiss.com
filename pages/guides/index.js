/**
 * Guides
 */

// UI
import { Card, CardBody, Column, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: 'How DryKISS operates as a development studio, our best practice guides',
    path: '/guides/linting',
    title: 'DryKISS Internal Guides Made Public.'
  }

  return (
    <Page heading='Guides' meta={meta}>
      <Row>
        <Column lg={3}>
          <Card
            alt='Page anatomy'
            bordered
            image='/static/guides/nextjs/anatomy.svg'
            shadow
            to='/guides/nextjs/anatomy'
          >
            <CardBody>Anatomy of a Page</CardBody>
          </Card>
        </Column>
      </Row>
    </Page>
  )
}
