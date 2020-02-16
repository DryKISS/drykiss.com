/**
 * Would You
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row, ListItem } from 'industry-ui'

// Next
import Head from 'next/head'

export default () => {
  const meta = {
    description: `
    Would You
    `,
    path: '/pages/portfolio/facebook/would-you',
    title: 'Would You',
    author: 'Ian Warner',
    type: 'article'
  }

  return (
    <Page heading='Would You' meta={meta}>

      <Head>
        <meta
          content='https://drykiss.com/static/portfolio/triangle-solutions/would-you/hero.jpg?v=1.00'
          key='og:image'
          property='og:image'
        />
        <script async defer key='instagram' src='https://platform.instagram.com/en_US/embeds.js' />
      </Head>

      <Row>
        <Column md={12}>
          <Image
            alt='Would You'
            src='/static/portfolio/triangle-solutions/would-you/hero.png'
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
