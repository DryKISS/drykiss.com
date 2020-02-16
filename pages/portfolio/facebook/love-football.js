/**
 * Love Football
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row, ListItem } from 'industry-ui'

export default () => {
  const meta = {
    description: `
    Love Football
    `,
    path: '/pages/portfolio/facebook/love-football',
    title: 'Love Football',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/triangle-solutions/love-football/hero.png'
  }

  return (
    <Page heading='Love Football' meta={meta}>
      <Row>
        <Column md={12}>
          <Image
            alt='Love Football'
            src='/static/portfolio/triangle-solutions/love-football/hero.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Heading content='Tasks' tag='h3' />

          <Heading content='Project Duration' tag='h3' />

          <Heading content='Outcome' tag='h3' />

          <Heading content='Team' tag='h3' />

          <List>
            <ListItem>Ian Warner - Developer</ListItem>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />

        </Column>
      </Row>
    </Page>
  )
}
