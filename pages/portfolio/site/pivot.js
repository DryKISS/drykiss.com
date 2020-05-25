/**
 * IBM Pivot
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row, ListItem } from 'industry-ui'

// Next
import Head from 'next/head'

export default () => {
  const meta = {
    description: 'IBM - Pivot',
    path: '/pages/portfolio/site/pivot',
    title: 'IBM - Pivot',
    author: 'Ian Warner',
    type: 'article'
  }

  return (
    <Page pageHeading={{ heading: 'IBM - Pivot' }} meta={meta}>
      <Head>
        <meta
          content='https://drykiss.com/static/portfolio/ibm/pivot/hero.jpg?v=1.00'
          key='og:image'
          property='og:image'
        />
      </Head>

      <Row>
        <Column md={12}>
          <Image alt='IBM - Pivot' src='/static/portfolio/ibm/pivot/hero.png' />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Link to='http://fentonbutcher.co.uk/news/'>IBM - Pivot</Link>
          <p />

          <Link to='https://www.youtube.com/watch?v=2wN-vgbFnoc'>IBM iX London Studio Video</Link>
          <p />

          <Link to='http://studios.ibm.com/'>IBM Studios</Link>
          <p />

          <Link to='https://www-03.ibm.com/press/uk/en/pressrelease/46148.wss'>IBM London</Link>
          <p />

          <Heading content='Tasks' tag='h3' />

          <List>
            <ListItem>Accessibility</ListItem>
            <ListItem>SEO</ListItem>
            <ListItem>UX</ListItem>
            <ListItem>Responsive development</ListItem>
            <ListItem>Deployment</ListItem>
            <ListItem>Analytics</ListItem>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <ListItem>1 year of development</ListItem>
          </List>

          <Heading content='Technologies' tag='h3' />

          <List>
            <ListItem>Middleman</ListItem>
            <ListItem>AngularJS</ListItem>
            <ListItem>HAML</ListItem>
            <ListItem>CoffeeScript</ListItem>
            <ListItem>Sass</ListItem>
            <ListItem>Scrum</ListItem>
            <ListItem>BlueMix</ListItem>
            <ListItem>NodeJS</ListItem>
            <ListItem>CloudAnt</ListItem>
            <ListItem>Cordova</ListItem>
            <ListItem>Protractor</ListItem>
            <ListItem>Karma</ListItem>
            <ListItem>Prototyping</ListItem>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <ListItem />
            <ListItem />
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <ListItem>Ian Warner - Lead Developer</ListItem>
            <ListItem>Guillermo Noain Molina - Node Developer</ListItem>
            <ListItem>Matthew Parish - AngularJS Developer</ListItem>
            <ListItem>Fenton Butcher - UX</ListItem>
            <ListItem>Leila d'Angelo - Content</ListItem>
            <ListItem>Patrick Odey - Product Owner</ListItem>
            <ListItem>Krishna Chodipilli - Scrum Master</ListItem>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />
        </Column>
      </Row>
    </Page>
  )
}
