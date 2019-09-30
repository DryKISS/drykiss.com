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
  Row
} from 'industry-ui'

export default () => {
  const meta = {
    description: `
      To celebrate Arthur's Day, Guinness required a Facebook page that could be
      distributed amongst it's marketing locations.
    `,
    path: '/portfolio/facebook/brazil-soccer-name',
    title: 'Guinness® Facebook Page'
  }

  return (
    <Page heading='Guinness® Arthurs Day' meta={meta}>

      <Row>
        <Column md={12}>
          <Image alt='Arthurs Day' src='/static/portfolio/tribal-ddb/guinness-arthurs-day/hero.png' />
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
            <span>Developed PHP and Javascript page tab.</span>
            <span>Custom slider because Facebook JS was very limited</span>
            <span>Deployed onto Facebook page</span>
            <span>Social and Viral actions added</span>
            <span>Videos and Images optimised for speed of delivery</span>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <span>1 month development</span>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <span>Successfully delivered ontime</span>
            <span>Marketed to thousands of Guinness and Diageo fans</span>
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <span>Ian Warner - Developer</span>
            <span>James Mulligan - PM</span>
          </List>

        </Column>

        <Column md={9}>

          <Heading content='Description' tag='h2' />

          <p>
              Arthurs Day was an annual celebration at Guinness to celebrate the
              birthday of it's founder Arthur Guinness.
          </p>

          <p>
              DryKISS through TribalDDB created the Facebook page application to
              market the musical event.
          </p>

          <p>
              It contained band profiles with videos and imagery, the page was
              then marketed globally to all Guinness fans.
          </p>

        </Column>

      </Row>
    </Page>
  )
}
