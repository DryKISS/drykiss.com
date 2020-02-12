/**
 * Greentouch PI
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
    Greentouch PI
    `,
    path: '/pages/portfolio/site/greentouch-pi',
    title: 'Greentouch PI',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/drykiss/greentouch-pi/hero.png'
  }

  return (
    <Page heading='Greentouch PI' meta={meta}>
      <Row>
        <Column md={3}>
          <Image
            alt='greentouch-contact'
            src='/static/portfolio/drykiss/greentouch-pi/greentouch-contact.png'
          />
        </Column>
        <Column md={3}>
          <Image
            alt='greentouch-pi-1'
            src='/static/portfolio/drykiss/greentouch-pi/greentouch-pi-1.png'
          />
        </Column>
        <Column md={3}>
          <Image
            alt='greentouch-service'
            src='/static/portfolio/drykiss/greentouch-pi/greentouch-service.png'
          />
        </Column>
        <Column md={3}>
          <Image
            alt='greentouch-tea'
            src='/static/portfolio/drykiss/greentouch-pi/greentouch-tea.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Link to='http://greentouchpi.com/'>
            <a target='_blank'>Greentouch PI</a>
          </Link>
          <p />

          <Heading content='Tasks' tag='h3' />

          <List>
            <span>Keyword research</span><br />
            <span>SEO</span><br />
            <span>UX</span><br />
            <span>Design</span><br />
            <span>Responsive development</span><br />
            <span>Deployment</span><br />
            <span>Analytics</span><br />
            <span>Google search console</span><br />
            <span>Social pages, Facebook, Google and Wahanda</span>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <span>5 days research and reporting</span><br />
            <span>5 days development</span>
          </List>

          {/* <Heading content='Technologies' tag='h3' />

          <List>
            <span>Middleman</span>
            <span>AngularJS</span>
            <span>HAML</span>
            <span>CoffeeScript</span>
            <span>Sass</span>
            <span>GitHub hosting</span>
          </List> */}

          <Heading content='Outcome' tag='h3' />

          <List>
            <span>Page 1 on Google for search phrase "Massage Wimbledon"</span><br />
            <span>Business up 600% since launch</span><br />
            <span>4x the original staff levels</span>
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <span>Ian Warner - Technical leadr</span><br />
            <span>May Tran - Digital Marketing</span>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />

          <p> After enjoying one of the best Thai massages I have ever had in the
            UK; I confronted the owner Ling. Stating that her overall web
            presence could be improved, especially in terms of SEO and social
            marketing. Unfortunately the business didn't have a Facebook or
            Google business page and the SEO was non-existent, barely ranking
          </p>

          <p>Having launched CodeBlender we also wanted to put this library into
            practice on a commercial website. Quite confident that DryKISS could
            help this local business owner at least achieve some positive SEO
            gains.
          </p>

          <h3>Business Understanding</h3>
          <p>We arranged several meetings with Ling over the next few weeks to
            understand where the business currently was, understanding hers',
            the staff and clientèle's pain points.
          </p>

          <h3>Pain Points</h3>
          <p>A little web technology understanding.</p>
          <p>Had very little knowledge of SEO, social pages and Google SERPs.</p>
          <p>Had overspent on previous web-site and didn't want to make the same mistakes.</p>
          <p>Mixed messaging on what the business did.</p>
          <p>Memberships, promotions and loyalty cards were great but poorly conveyed and sometimes overlapped.</p>
          <p>Customer's all had very positive feedback about the services.</p>
          <p>Design and wording of marketing material was inconsistent.</p>
          <p>No company orientated email address.</p>
          <p>Current site was not responsive.</p>
          <p>It was originally set up in the Chinese model of a membership only
            spa and massage, but the owners quickly realised that this probably
            would not work in the UK.
          </p>

          <h3>Goal</h3>
          <p>Before we embarked on any new site development, we wanted to
            investigate the pain points and find solutions for as much of these
            as possible.
          </p>
          <p>Make GreenTouchPI the top Thai massage establishment on Google within 6 months.</p>
          <p>Setup social pages; Facebook, Wahanda, now Treatwell, Google Business Page.</p>
          <p>Establish a routine of social posting, and promotion schedule.</p>
          <p>Create a site that was responsive, fast and met Google's latest checklist.</p>
          <p>Simple contact and booking form.</p>

          <h3>Competitor Analysis</h3>
          <p>  DryKISS conducted a thorough competitive analysis of the 10 or so
            local massage establishments in the area.
          </p>
          <p>
            Investigating the Social and SEO strategies and potential keywords
            and phrases they were targeting. Also looking at services, pricing
            and promotional activities.
          </p>
          <p> Outcome of this was that it was entirely possible to create a SEO
            strategy that could compete if not outstrip these competitors.
          </p>

          <h3>Keyword Research</h3>
          <p>DryKISS drafted a thorough report on the phrases used by local
            residents around massage services. We identified many keywords,
            terms and phrases we should look at incorporating on all messaging
            the organisation sends out.
          </p>

          <h3>Development</h3>
          <p>A small budget was put in place to carry out this transformation. It
            meant that we could not utilise the usual DryKISS design process.
          </p>
          <p>
            We opted to use a generic Bootstrap styled site, to inherently give
            us a responsive design, it therefore meant we could rapidly build
            pages and focus resource and budget on the digital marketing aspect
            of the plan.
          </p>
        </Column>
      </Row>
    </Page>
  )
}
