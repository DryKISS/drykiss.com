/**
 * IBM Iris
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row, ListItem } from 'industry-ui'

// Next
import Head from 'next/head'

export default () => {
  const meta = {
    description: `
    Sales enablement hybrid iPad application to facilitate the client seller communication"
    `,
    path: '/portfolio/mobile/ibm-iris',
    title: 'IBM - Iris',
    author: 'Ian Warner',
    type: 'article'
  }

  return (
    <Page heading='Hybrid iPad application' meta={meta}>

      <Head>
        <meta
          content='https://drykiss.com/static/portfolio/ibm/iris/hero.jpg?v=1.00'
          key='og:image'
          property='og:image'
        />
      </Head>

      <Row>
        <Column md={12}>
          <Image
            alt='ibm iris'
            src='/static/portfolio/ibm/iris/hero.png'
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

          <p>Sales enablement hybrid iPad application to facilitate the client seller communication</p>

        </Column>
      </Row>
    </Page>
  )
}
