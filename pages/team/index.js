/**
 * Team
 */

// UI
import { Card, CardBody, Column, Page, Row } from 'industry-ui'

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
      <h2>Meet the Drykiss squad!</h2>
      <p>In DryKISS we offer a full service development and marketing solution, we are prepared to listen to your needs, craft your project and help boost your business. Our team is comprised of highly skilled professionals with over 20 years of experiences in web development and digital marketing, which secured the success of our collaboration.</p>

      <Row>
        <Column lg={3}>
          <Card
            alt='Ian Warner'
            bordered
            image='/static/freelancer/ian-warner/1.jpg'
            shadow
            to='team/Ian-Warner'
          >
            <CardBody>Ian Warner</CardBody>
          </Card>
        </Column>
      </Row>
    </Page>
  )
}
