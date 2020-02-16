/**
 * Yofone
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row, ListItem } from 'industry-ui'

export default () => {
  const meta = {
    description: `
    YoFone
    `,
    path: '/pages/portfolio/site/yofone',
    title: 'YoFone',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/yofone/yofone/hero.png'
  }

  return (
    <Page heading='YoFone' meta={meta}>
      <Row>
        <Column md={12}>
          <Image
            alt='YoFone'
            src='/static/portfolio/yofone/yofone/hero.png'
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
