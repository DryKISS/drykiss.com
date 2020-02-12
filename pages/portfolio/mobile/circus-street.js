/**
 * Circus Street
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
    Circus Street - Video e-learning platform
    `,
    path: '/portfolio/mobile/circus-street',
    title: 'Circus Street - Video e-learning platform',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/drykiss/circus-street/hero.png'
  }

  return (
    <Page heading='Circus Street - Video e-learning platform' meta={meta}>
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
            <span>Hybrid mobile development</span><br />
            <span>Offline capabilities</span><br />
            <span>Responsive development</span><br />
            <span>Deployment</span><br />
            <span>Analytics</span>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <span>3 month development</span>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <span>Deployed new hybrid apps to iOS and Android</span><br />
            <span>Engagement rising on both apps</span>
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <span>Ian Warner - Technical Lead</span>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />

          <p>
            DryKISS made contact with Circus Street through the YunoJuno platform.
          </p>

          <p>
            They were in quite a desperate need for some rapid development and
            decisions on the direction of their Hybrid project.
          </p>

          <p>
            They had already built a native iPad application previously, but
            wanted to use the Cordova technology to enable a cross platform,
            multi-device experience.
          </p>
        </Column>
      </Row>
    </Page>
  )
}
