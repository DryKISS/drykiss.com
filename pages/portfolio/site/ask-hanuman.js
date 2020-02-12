/**
 * Ask Hanuman
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
      AskHanuman
    `,
    path: '/pages/portfolio/site/ask-hanuma',
    title: 'AskHanuman',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/alpha-founders/hero.png'
  }

  return (
    <Page heading='AskHanuman' meta={meta}>
      <Row>
        <Column md={12}>
          <Image
            alt='AskHanuman'
            src='/static/portfolio/alpha-founder/hero.png'
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

        </Column>
      </Row>
    </Page>
  )
}
