/**
 * Circus Street
 */

// Next
import Head from 'next/head'

// UI
import { Column, Divider, Heading, Image, List, Page, Row, ListItem } from 'industry-ui'

export default () => {
  const meta = {
    description: `
    Circus Street - Video e-learning platform
    `,
    path: '/portfolio/mobile/circus-street',
    title: 'Circus Street - Video e-learning platform',
    author: 'Ian Warner',
    type: 'article'
  }

  return (
    <Page heading='Circus Street - Video e-learning platform' meta={meta}>
      <Head>
        <meta
          content='https://drykiss.com/static/portfolio/drykiss/circus-street/hero.jpg?v=1.00'
          key='og:image'
          property='og:image'
        />
      </Head>

      <Row>
        <Column md={3}>
          <Image
            alt='circus street'
            src='/static/portfolio/drykiss/circus-street/circus-street-home-mobile.jpeg'
          />
        </Column>
        <Column md={3}>
          <Image
            alt='circusstreet-jargon-mobile'
            src='/static/portfolio/drykiss/circus-street/circusstreet-jargon-mobile.jpeg'
          />
        </Column>
        <Column md={3}>
          <Image
            alt='circusstreet-lesson-mobile'
            src='/static/portfolio/drykiss/circus-street/circusstreet-lesson-mobile.jpeg'
          />
        </Column>
        <Column md={3}>
          <Image
            alt='circusstreet-video-mobile'
            src='/static/portfolio/drykiss/circus-street/circusstreet-video-mobile.jpeg'
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
            <ListItem>Hybrid mobile development</ListItem>
            <ListItem>Offline capabilities</ListItem>
            <ListItem>Responsive development</ListItem>
            <ListItem>Deployment</ListItem>
            <ListItem>Analytics</ListItem>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <ListItem>3 month development</ListItem>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <ListItem>Deployed new hybrid apps to iOS and Android</ListItem>
            <ListItem>Engagement rising on both apps</ListItem>
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <ListItem>Ian Warner - Technical Lead</ListItem>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />

          <p>DryKISS made contact with Circus Street through the YunoJuno platform.</p>

          <p>
            They were in quite a desperate need for some rapid development and decisions on the
            direction of their Hybrid project.
          </p>

          <p>
            They had already built a native iPad application previously, but wanted to use the
            Cordova technology to enable a cross platform, multi-device experience.
          </p>
        </Column>
      </Row>
    </Page>
  )
}
