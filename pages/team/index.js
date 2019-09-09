/**
 * Team
 */

// Layout
import { Page } from 'layout/page'

// UI
import { Card, CardBody, Column, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/team',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page heading='Team' meta={meta}>
      <Row>
        <Column lg={3}>

          <Card
            alt='Ian Warner'
            bordered
            image='/static/freelancer/ian-warner/1.jpg'
            shadow
            to='https://availabletowork.com/freelancer/ian-warner'
          >
            <CardBody>
              Ian Warner
            </CardBody>
          </Card>

        </Column>
      </Row>
    </Page>
  )
}
