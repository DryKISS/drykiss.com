/**
 * Careers - List
 */

// UI
import { Card, CardBody, Column, Container, Row, Space } from '@drykiss/industry-ui'

export const CareersList = ({ items }) => {
  return (
    <Container>
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

      <Row>
        {items.map(career => (
          <>
            <Column key={career.slug} md={3}>
              <Card
                alt={career.title}
                bordered
                image={career.cover}
                shadow
                to={`/careers/${career.slug}`}
              >
                <CardBody>{career.title}</CardBody>
              </Card>
            </Column>

            <Space marginBottom='xxl' />
          </>
        ))}
      </Row>

      <Space marginBottom='xxl' />
    </Container>
  )
}
