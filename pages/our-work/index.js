/**
 * Our Work
 */

// Layout
import { Page } from 'layout/page'

// UI
import { Card, Column, Image, Row } from 'industry-ui'

// Data
import { PORTFOLIO_FACEBOOK } from 'data'

export default () => {
  const renderPortfolio = () =>
    PORTFOLIO_FACEBOOK.map(({ active, client, slug, title, type }, index) => {
      if (active) {
        return (
          <Column key={index} md={6} lg={4}>
            <Card
              bordered
              footer={title}
              shadow
              to={{
                href: {
                  pathname: `/portfolio/${type}/${slug}`
                }
              }}
            >
              <Image
                alt={title}
                src={`/static/portfolio/${client}/${slug}/hero.png`}
              />
            </Card>
          </Column>
        )
      }
    })

  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/our-work',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page heading='Our Work' meta={meta}>
      <Row>
        {renderPortfolio()}
      </Row>
    </Page>
  )
}
