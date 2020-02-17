/**
 * Jack Morton Samsung
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row, ListItem } from 'industry-ui'

// Next
import Head from 'next/head'

export default () => {
  const meta = {
    description: `
      Jack Morton Samsung
    `,
    path: '/pages/portfolio/mobile/samsung',
    title: 'Jack Morton Samsung',
    author: 'Ian Warner',
    type: 'article'
  }

  return (
    <Page heading='Jack Morton Samsung' meta={meta}>

      <Head>
        <meta
          content='https://drykiss.com/static/portfolio/jack-morton/samsung/hero.jpg?v=1.00'
          key='og:image'
          property='og:image'
        />
      </Head>

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
