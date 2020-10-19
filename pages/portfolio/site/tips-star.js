/**
 * Tips Star
 */

// UI
import { Column, Divider, Heading, Image, List, Page, Row, ListItem } from '@drykiss/industry-ui'

// Next
import Head from 'next/head'
import PageTipText from './tip-text'

const PageTipsStar = () => {
  const meta = {
    description: 'Tips star',
    path: '/pages/portfolio/site/tips-star',
    title: 'Tips star',
    author: 'Ian Warner',
    type: 'article'
  }

  return (
    <Page pageHeading={{ heading: 'Tips star' }} meta={meta}>
      <Head>
        <meta
          content='https://drykiss.com/static/portfolio/tips-star/tips-star/hero.jpg?v=1.00'
          key='og:image'
          property='og:image'
        />
      </Head>

      <Row>
        <Column md={12}>
          <Image alt='Tips star' src='/static/portfolio/tips-star/tips-star/hero.png' />
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

export default PageTipsStar
