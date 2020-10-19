/**
 * Brazil Soccer Name
 */

// UI
import {
  Column,
  Divider,
  Heading,
  Image,
  Link,
  List,
  Page,
  Row,
  ListItem
} from '@drykiss/industry-ui'

// Next
import Head from 'next/head'

const PageBrazilName = () => {
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
    <Page pageHeading={{ heading: 'Brazil Soccer Name Generator' }} meta={meta}>
      <Head>
        <meta
          content='https://drykiss.com/images/portfolio/triangle-solutions/brazil-soccer-name-generator/hero.jpg?v=1.00'
          key='og:image'
          property='og:image'
        />
      </Head>

      <Row>
        <Column md={12}>
          <Image
            alt='Brazil Soccer Name'
            src='/images/portfolio/triangle-solutions/brazil-soccer-name-generator/hero.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Link to=''>Brazil Soccer Name</Link>
          <p />

          <Heading content='Tasks' tag='h3' />

          <List>
            <ListItem>Developed Javascript algorithm to create name</ListItem>
            <ListItem>Database creation to manage users and names</ListItem>
            <ListItem>Deployed on Facebook platform</ListItem>
            <ListItem>Social and Viral actions enhanced</ListItem>
            <ListItem>InterListlinked with other Facebook apps</ListItem>
          </List>
          <p />

          <Heading content='Project Duration' tag='h3' />

          <List>
            <ListItem>2 weeks development</ListItem>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <ListItem>Tens of thousands of downloads</ListItem>
            <ListItem>Ceased due to Facebook changing profile rules</ListItem>
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <ListItem>Ian Warner - Developer</ListItem>
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
export default PageBrazilName
