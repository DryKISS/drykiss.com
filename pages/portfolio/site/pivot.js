/**
 * IBM Pivot
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
    IBM - Pivot
    `,
    path: '/pages/portfolio/site/pivot',
    title: 'IBM - Pivot',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/ibm/pivot/hero.png'
  }

  return (
    <Page heading='IBM - Pivot' meta={meta}>
      <Row>
        <Column md={12}>
          <Image
            alt='IBM - Pivot'
            src='/static/portfolio/ibm/pivot/hero.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Link to='http://fentonbutcher.co.uk/news/'>
            <a target='_blank'>IBM - Pivot</a>
          </Link>
          <p />

          <Link to='https://www.youtube.com/watch?v=2wN-vgbFnoc'>
            <a target='_blank'>IBM iX London Studio Video</a>
          </Link>
          <p />

          <Link to='http://studios.ibm.com/'>
            <a target='_blank'>IBM Studios</a>
          </Link>
          <p />

          <Link to='https://www-03.ibm.com/press/uk/en/pressrelease/46148.wss'>
            <a target='_blank'>IBM London</a>
          </Link>
          <p />

          <Heading content='Tasks' tag='h3' />

          <List>
            <span>Accessibility</span><br />
            <span>SEO</span><br />
            <span>UX</span><br />
            <span>Responsive development</span><br />
            <span>Deployment</span><br />
            <span>Analytics</span>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <span>1 year of development</span>
          </List>

          {/* <Heading content='Technologies' tag='h3' />

          <List>
            <span>Middleman</span>
            <span>AngularJS</span>
            <span>HAML</span>
            <span>CoffeeScript</span>
            <span>Sass</span>
            <span>Scrum</span>
            <span>BlueMix</span>
            <span>NodeJS</span>
            <span>CloudAnt</span>
            <span>Cordova</span>
            <span>Protractor</span>
            <span>Karma</span>
            <span>Prototyping</span>
          </List> */}

          <Heading content='Outcome' tag='h3' />

          <List>
            <span />
            <span />
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <span>Ian Warner - Lead Developer</span><br />
            <span>Guillermo Noain Molina - Node Developer</span><br />
            <span>Matthew Parish - AngularJS Developer</span><br />
            <span>Fenton Butcher - UX</span><br />
            <span>Leila d'Angelo - Content</span><br />
            <span>Patrick Odey - Product Owner</span><br />
            <span>Krishna Chodipilli - Scrum Master</span>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />

        </Column>
      </Row>
    </Page>
  )
}
