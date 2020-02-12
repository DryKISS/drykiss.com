/**
 * Jack Morton Samsung
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
      Jack Morton Samsung
    `,
    path: '/pages/portfolio/mobile/samsung',
    title: 'Jack Morton Samsung',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/jack-morton/samsung/hero.png'
  }

  return (
    <Page heading='Jack Morton Samsung' meta={meta}>
      <Row>
        <Column md={12}>
          <Image
            alt='Jack Morton Samsung'
            src='/static/portfolio/jack-morton/samsung/hero.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Link to='http://www.eventmagazine.co.uk/samsung-galaxy-studio-showcases-devices-portobello-road/destinations/article/1217188'>
            <a target='_blank'>Jack Morton Samsung</a>
          </Link>
          <p />

          <Heading content='Tasks' tag='h3' />

          <List>
            <span />
            <span />
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <span />
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <span />
            <span />
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <span>Ian Warner - Developer</span>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />

        </Column>
      </Row>
    </Page>
  )
}
