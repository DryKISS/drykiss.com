/**
 * Deliveroo Excuse Generator
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
      Deliveroo - Excuse generator
    `,
    path: '/portfolio/site/deliveroo-excuse-generator',
    title: 'Deliveroo - Excuse generator',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/deliveroo/excuse-generator/hero.png'
  }

  return (
    <Page heading='Deliveroo - Excuse generator' meta={meta}>
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
            <span>Marketing application</span><br />
            <span>7 languages</span><br />
            <span>Automatic image generation</span><br />
            <span>Social sharing</span><br />
            <span>Adaptive development</span><br />
            <span>Analytics</span>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <span>3 weeks development</span>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <span>Delivered on time</span><br />
            <span>Many change requests handled</span>
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <span>Ian Warner - Technical Lead</span>
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
