/**
 * Jack Morton Sabic
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
    Jack Morton Sabic
    `,
    path: '/portfolio/mobile/sabic',
    title: 'Circus Street - Video e-learning platform',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/jack-morton/sabic/hero.png'
  }

  return (
    <Page heading='Jack Morton Sabic' meta={meta}>
      <Row>
        <Column md={12}>
          <Image
            alt='circus street'
            src='/static/portfolio/jack-morton/sabic/hero.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Heading content='Tasks' tag='h3' />

          <List>
            <span />
            <span />
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <span>7 days development</span>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <span />
            <span />
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <span>Ian Warner - Technical lead</span>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />

        </Column>
      </Row>
    </Page>
  )
}
