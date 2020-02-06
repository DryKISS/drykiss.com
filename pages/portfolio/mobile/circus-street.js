/**
 * Brazil Soccer Name
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
    image: 'http://drykiss.com/assets/images/portfolio/circusstreet/circusstreet-home.png'
  }

  return (
    <Page heading='Circus Street - Video e-learning platform' meta={meta}>
      <Row>
        <Column md={12}>
          <Image
            alt='circus street'
            src='/static/portfolio/circus-street/circus-street/hero.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Link to='https://en.wikipedia.org/wiki/Arthur%27s_Day'>
            <a target='_blank'>Arthur's Day</a>
          </Link>

          <Link to='https://www.youtube.com/watch?v=nJA4AifqbsM&feature=youtu.be'>
            <a target='_blank'>Arthur's Day Video</a>
          </Link>
          <p />

          {/* https://www.irishpubsglobal.com/guinness-unveils-2011-arthurs-day-line-up/ */}
          {/* https://www.youtube.com/watch?v=OKEQ_NuRl2c */}

          <Heading content='Tasks' tag='h3' />

          <List>
            <span>Hybrid mobile development</span>
            <span>Offline capabilities</span>
            <span>Responsive development</span>
            <span>Deployment</span>
            <span>Analytics</span>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <span>3 month development</span>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <span>Deployed new hybrid apps to iOS and Android</span>
            <span>Engagement rising on both apps</span>
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <span>Ian Warner - Technical lead</span>
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
