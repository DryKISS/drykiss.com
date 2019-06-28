/**
 * Our Work
 *
 * @todo List the articles for the portfolio
 * @todo Should show a linked image with title and description
 * @todo Image should be uniform square
 */

// Config
import { BRAND, URL_BASE } from 'config'

// UI
import {
  Card,
  Column,
  Container,
  Image,
  MetaHead,
  PageHeading,
  Row
} from 'industry-ui'

// Data
import { PORTFOLIO_FACEBOOK } from 'data'

const OurWork = () => {
  const renderPortfolio = () =>
    PORTFOLIO_FACEBOOK.map(({ client, slug, title }, index) => (
      <Column key={index} lg={4}>

        <Card
          bordered
          footer={title}
        >
          <Image alt={title} src={`/static/portfolio/${client}/${slug}-1.png`} />
        </Card>

      </Column>
    ))

  const meta = {
    canonical: URL_BASE,
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    title: `DryKISS develops hybrid mobile and responsive websites`
  }

  return (
    <>
      <MetaHead meta={meta} brand={BRAND} />

      <Container>

        <PageHeading heading='Our Work' />

        <Row>
          {renderPortfolio()}
        </Row>

      </Container>
    </>
  )
}

export default OurWork
