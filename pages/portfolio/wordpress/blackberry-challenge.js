/**
 * Blackberry Youth Challenge
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row, ListItem } from 'industry-ui'

export default () => {
  const meta = {
    description: `
    Blackberry wanted to hook into the Youth market. We built the site using a Custom Wordpress theme and plugins
    `,
    path: '/pages/portfolio/wordpress/blackberry-challenge',
    title: 'Blackberry® Youth Challenge',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/razorfish/blackberry-challenge/bhero.png'
  }

  return (
    <Page heading='Blackberry® Youth Challenge' meta={meta}>
      <Row>
        <Column md={12}>
          <Image
            alt='blackberry'
            src='/static/portfolio/razorfish/blackberry-challenge/hero.png'
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
