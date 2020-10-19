/**
 * Careers
 * Showcases available jobs at DryKISS
 *
 * @see https://www.malt.es/
 */

// UI
import { Card, CardBody, Column, Heading, Page, Row } from '@drykiss/industry-ui'

const PageCareers = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/careers',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page pageHeading={{ heading: 'Careers' }} meta={meta}>
      <p>
        At DryKISS, we thrive on being the best; we love to continually learn, use the latest
        technologies and prototype everything. Our main goal though is to keep our clients and their
        customers happy. We do this by crafting top notch Accessible and SEO friendly sites. Quality
        is essential around everything we do.
      </p>

      <p>
        We are looking to expand what we do to Valencia, a city we have fallen in love with. We
        believe it promotes the work life balance that is so essential these days. We can work hard
        and sleep easy. If you are passionate about quality, entrepreneurial at heart and have a
        passion for what you do then please get in touch.
      </p>

      <Heading content='Current job openings' tag='h2' />

      <Row>
        <Column md={3}>
          <Card
            alt='React job opening'
            bordered
            image='/images/careers/react.svg'
            shadow
            to='/careers/react'
          >
            <CardBody>Senior React Developer</CardBody>
          </Card>
        </Column>

        <Column md={3}>
          <Card
            alt='React job opening'
            bordered
            image='/images/careers/react.svg'
            shadow
            to='/careers/react-junior'
          >
            <CardBody>Junior React Developer</CardBody>
          </Card>
        </Column>

        <Column md={3}>
          <Card
            alt='React job opening'
            bordered
            image='/images/careers/react.svg'
            shadow
            to='/careers/react-intern'
          >
            <CardBody>Intern React Developer</CardBody>
          </Card>
        </Column>
      </Row>
    </Page>
  )
}

export default PageCareers
