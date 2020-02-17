/**
 * Deliveroo Excuse Generator
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row, ListItem } from 'industry-ui'

// Next
import Head from 'next/head'

export default () => {
  const meta = {
    description: `
      Deliveroo - Excuse generator
    `,
    path: '/portfolio/site/deliveroo-excuse-generator',
    title: 'Deliveroo - Excuse generator',
    author: 'Ian Warner',
    type: 'article'
  }

  return (
    <Page heading='Deliveroo - Excuse generator' meta={meta}>

      <Head>
        <meta
          content='https://drykiss.com/static/portfolio/deliveroo/excuse-generator/hero.jpg?v=1.00'
          key='og:image'
          property='og:image'
        />
      </Head>

      <Row>
        <Column md={12}>
          <Image
            alt='Deliveroo - Excuse generator'
            src='/static/portfolio/deliveroo/excuse-generator/hero.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Link to='http://excuse-generator.com/'>
            <a target='_blank'>Deliveroo Excuse generator</a>
          </Link>
          <p />

          <Heading content='Tasks' tag='h3' />
          <List>
            <ListItem>Marketing application</ListItem>
            <ListItem>7 languages</ListItem>
            <ListItem>Automatic image generation</ListItem>
            <ListItem>Social sharing</ListItem>
            <ListItem>Adaptive development</ListItem>
            <ListItem>Analytics</ListItem>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <ListItem>3 weeks development</ListItem>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <ListItem>Delivered on time</ListItem>
            <ListItem>Many change requests handled</ListItem>
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <ListItem>Ian Warner - Technical Lead</ListItem>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />

          <p>
            DryKISS completed what is the most ambitious digital marketing
            build for Deliveroo in it's history.
          </p>

          <p>
            They required in a short development window the development of a
            global site for their #AnyExcuse campaign.
          </p>

        </Column>
      </Row>
    </Page>
  )
}
