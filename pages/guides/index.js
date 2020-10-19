/**
 * Guides
 */

// UI
import { Card, CardBody, Column, Page, Row } from '@drykiss/industry-ui'

export default () => {
  const meta = {
    description: 'How DryKISS operates as a development studio, our best practice guides',
    path: '/guides',
    title: 'DryKISS Internal Guides Made Public.'
  }

  return (
    <Page pageHeading={{ heading: 'Guides' }} meta={meta}>
      <Row>
        <Column lg={3}>
          <Card
            alt='Git'
            bordered
            image='/static/guides/git/git.svg'
            shadow
            to='/guides/continuous-intergration/git'
          >
            <CardBody>Git</CardBody>
          </Card>
        </Column>

        <Column lg={3}>
          <Card
            alt='Github'
            bordered
            image='/static/guides/git/git.svg'
            shadow
            to='/guides/continuous-intergration/github'
          >
            <CardBody>Github</CardBody>
          </Card>
        </Column>

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

        <Column lg={3}>
          <Card
            alt='Onboarding'
            bordered
            image='/static/guides/git/git.svg'
            shadow
            to='/guides/onboarding/tools'
          >
            <CardBody>Tools</CardBody>
          </Card>
        </Column>
      </Row>
    </Page>
  )
}
