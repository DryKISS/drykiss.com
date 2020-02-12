/**
 * PHP Multiple Newsletters
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
    PHP Multiple Newsletters
    `,
    path: '/pages/portfolio/site/php-multiple-newsletters',
    title: 'PHP Multiple Newsletters',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/triangle-solutions/php-multiple-newsletters/hero.png'
  }

  return (
    <Page heading='PHP Multiple Newsletters' meta={meta}>
      <Row>
        <Column md={12}>
          <Image
            alt='PHP Multiple Newsletters'
            src='/static/portfolio/Minesoft/hero.png'
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
