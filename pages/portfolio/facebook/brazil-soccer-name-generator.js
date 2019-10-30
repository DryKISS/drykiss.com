/**
 * Brazil Soccer Name
 *
 * @todo Add when
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
      DryKISS developed Brazil Soccer Name as an early Facebook platform
      application. It created a brazilian name for the user and placed the shirt
      on the users profile.
    `,
    path: '/portfolio/facebook/brazil-soccer-name',
    title: 'Brazil Soccer Name Facebook Application'
  }

  return (
    <Page heading='Brazil Soccer Name Generator' meta={meta}>
      <Row>
        <Column md={12}>
          <Image
            alt='Brazil Soccer Name'
            src='/static/portfolio/triangle-solutions/brazil-soccer-name-generator/hero.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Link to=''>
            <a>Brazil Soccer Name</a>
          </Link>
          <p />

          <Heading content='Tasks' tag='h3' />

          <List>
            <span>Developed Javascript algorithm to create name</span>
            <span>Database creation to manage users and names</span>
            <span>Deployed on Facebook platform</span>
            <span>Social and Viral actions enhanced</span>
            <span>Interlinked with other Facebook apps</span>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <span>2 weeks development</span>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <span>Tens of thousands of downloads</span>
            <span>Ceased due to Facebook changing profile rules</span>
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <span>Ian Warner - Developer</span>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />

          <p>
            Brazil Soccer Name was a small fun Facebook application created in a very short time to
            really amplify the conversions we wanted on Love Football.
          </p>

          <p>
            It was very successful with tens of thousands of downloads, and many thousands of social
            interactions such as shares and likes.
          </p>
        </Column>
      </Row>
    </Page>
  )
}
