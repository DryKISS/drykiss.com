/**
 * Deliveroo Rebrand
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
    Deliveroo - Food home delivery"
    `,
    path: '/portfolio/wordpress/deliveroo-rebrand',
    title: 'Deliveroo - Food home delivery',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/deliveroo/blog/hero.png'
  }

  return (
    <Page heading='Brazil Soccer Name Generator' meta={meta}>
      <Row>
        <Column md={3}>
          <Image
            alt='deliveroo-home-mobile'
            src='/static/portfolio/deliveroo/blog/deliveroo-home-mobile.png'
          />
        </Column>
        <Column md={3}>
          <Image
            alt='deliveroo-post-mobile'
            src='/static/portfolio/deliveroo/blog/deliveroo-post-mobile.png'
          />
        </Column>
        <Column md={3}>
          <Image
            alt='deliveroo-post'
            src='/static/portfolio/deliveroo/blog/deliveroo-post.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Link to='https://deliveroo.co.uk/blog/'>
            <a>Deliveroo Blog</a>
          </Link>
          <p />

          <Heading content='Tasks' tag='h3' />

          <List>
            <span>Wordpress theme edits</span><br />
            <span>Wordpress plug-in edits</span><br />
            <span>Responsive development</span><br />
            <span>Deployment</span>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <span>3 days development</span>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <span>Delivered edits on time</span><br />
            <span>Deployed at midnight</span>
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <span>Ian Warner - Technical Lead</span>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />

          <p>DryKISS was contacted by a former colleague; now Head of Content at
            Deliveroo, to help achieve some significant blog edits. These edits
            were forming part of the new Deliveroo brand launch on Sunday 4th
            September 2016.
          </p>
          <p>
            The blog actually consisted of a Wordpress MulitSite holding seven international blogs. Each one would have to be tested and edited.
          </p>
          <p>It just happened we were contacted just three days earlier...</p>

          <h3>Business understanding</h3>
          <p>The discovery phase for the work required had to be undertaken over
            Skype due to the tight deadline. DryKISS set up our usual scrum Trello
            board and placed all the features and work packages that needed to be
            delivered.
          </p>
          <p>We then liaised through Trello to achieve a slick communication between
            DryKISS, internal designer and the Content manager.
          </p>

          <h3>Pain points</h3>
          <p>Blog had to be deployed through another third party company
          </p>
          <p>Getting setup on the development system was unknown
          </p>
          <p>Wordpress setup was unknown</p>

          <h3>Goal</h3>
          <p>The overriding goal was to complete the brand re-design of all the
            pages of the blog before a newsletter to 2 million users was distributed.
          </p>
          <p>This meant working incredibly fast to make the changes to facilitate
            a suitable sign off.
          </p>

          <h3>Developement</h3>
          <p>The Wordpress theme and internal mechanics were understood quickly.
            So it was then just a matter of pushing through the CSS changes, checking
            against cross-browser compatibility, responsive look and feel and
            new font inclusion.
          </p>
          <p>DrKISS complete the changes mid-day on the Sunday, to allow a full
            spectrum text by the client. Everything was deployed at midnight with
            just some minor changes to the caching mechanism to set it live.
          </p>
        </Column>
      </Row>
    </Page>
  )
}
