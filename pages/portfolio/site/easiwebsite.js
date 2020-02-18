/**
 * Xpansif Easi Website
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row, ListItem } from 'industry-ui'

// Next
import Head from 'next/head'

export default () => {
  const meta = {
    description: `
    Xpansif - Easi Website
    `,
    path: '/pages/portfolio/site/easiwebsite',
    title: 'Xpansif',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/xpansif/easiwebsite/hero.png'
  }

  return (
    <Page heading='Xpansif - Easi Website' meta={meta}>

      <Head>
        <meta
          content='https://drykiss.com/static/portfolio/xpansif/easiwebsite/hero.jpg?v=1.00'
          key='og:image'
          property='og:image'
        />
      </Head>

      <Row>
        <Column md={12}>
          <Image
            alt='Xpansif'
            src='/static/portfolio/xpansif/easiwebsite/hero.png'
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
