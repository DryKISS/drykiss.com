/**
 * Jack Morton Sabic
 */

// UI
import { Column, Divider, Heading, Image, List, Page, Row, ListItem } from '@drykiss/industry-ui'

// Next
import Head from 'next/head'

const PageSabic = () => {
  const meta = {
    description: 'Jack Morton Sabic',
    path: '/portfolio/mobile/sabic',
    title: 'Jack Morton Sabic',
    author: 'Ian Warner',
    type: 'article'
  }

  return (
    <Page pageHeading={{ heading: 'Jack Morton Sabic' }} meta={meta}>
      <Head>
        <meta
          content='https://drykiss.com/images/portfolio/jack-morton/sabic/hero.jpg?v=1.00'
          key='og:image'
          property='og:image'
        />
      </Head>

      <Row>
        <Column md={12}>
          <Image alt='circus street' src='/images/portfolio/jack-morton/sabic/hero.png' />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Heading content='Tasks' tag='h3' />

          <Heading content='Project Duration' tag='h3' />

          <List>
            <ListItem>7 days development</ListItem>
          </List>

          <Heading content='Outcome' tag='h3' />

          <Heading content='Team' tag='h3' />

          <List>
            <ListItem>Ian Warner - Technical lead</ListItem>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />
        </Column>
      </Row>
    </Page>
  )
}

export default PageSabic
