/**
 * Walt Disney® Prince of Persia
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row, ListItem } from 'industry-ui'

export default () => {
  const meta = {
    description: `
      Walt Disney required a Facebook page for the movie Prince of Persia that
      could be localised and distributed.
    `,
    path: '/pages/portfolio/facebook/walt-disney-prince-of-persia',
    title: 'Walt Disney® Prince of Persia',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/digital-outlook/walt-disney-prince-of-persia/hero.png'
  }

  return (
    <Page heading='Walt Disney® Prince of Persia' meta={meta}>
      <Row>
        <Column md={12}>
          <Image
            alt='Prince of Persia'
            src='/static/portfolio/digital-outlook/walt-disney-prince-of-persia/hero.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Link to='https://www.facebook.com/Prince-of-Persia-UK-111470518895615/'>
            <a target='_blank'>Page</a>
          </Link>
          <p />

          <Link to='https://www.facebook.com/PrinceOfPersiaMovie/'>
            <a target='_blank'>Film</a>
          </Link>
          <p />

          <Heading content='Tasks' tag='h3' />

          <List>
            <ListItem>Developed in PHP and Javascript</ListItem>
            <ListItem>Localised over 7 countries on individual Facebook pages</ListItem>
            <ListItem>Deployed on Facebook platform</ListItem>
            <ListItem>Social and Viral actions enhanced</ListItem>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <ListItem>1 month development</ListItem>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <ListItem>Marketed in locations as the film showed in the theatre</ListItem>
            <ListItem>Delivered on time</ListItem>
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <ListItem>Ian Warner - Developer</ListItem>
            <ListItem>Mikael Gotlib - PM</ListItem>
            <ListItem>Threeya Thirunathan - PM</ListItem>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />

          <p>
            Prince of Persia: The Sand of Time, is a blockbuster movie starring Jake Gyllenhaal.
            Disney wanted to use Facebook to market the film in various locations. UK, Italy,
            Germany etc.
          </p>

          <p>
            It was decided to create a page for each country so the content could be
            internationalied and localised for each.
          </p>

          <p>
            This proved exceptionally problematic in terms of getting sign off for each change
            required from one country to another, but we managed to deliver all pages on time.
          </p>

          <p>
            Facebook at this time also had issues in terms of testing whole pages. So extra effort
            was needed to set this all up.
          </p>
        </Column>
      </Row>
    </Page>
  )
}
