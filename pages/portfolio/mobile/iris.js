/**
 * IBM Iris
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
    Sales enablement hybrid iPad application to facilitate the client seller communication"
    `,
    path: '/portfolio/mobile/ibm-iris',
    title: 'IBM - Iris',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/ibm/iris/hero.png'
  }

  return (
    <Page heading='Hybrid iPad application' meta={meta}>
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

          <List>
            <span />
            <span />
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <span />
            <span />
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <span />
            <span />
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <span>Ian Warner - Developer</span>
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
