/**
 *Beep Taxi
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row, ListItem } from 'industry-ui'

// Next
import Head from 'next/head'

export default () => {
  const meta = {
    description: `
      Beep Taxi
    `,
    path: '/pages/portfolio/site/beep-taxi',
    title: 'Beep Taxi',
    author: 'Ian Warner',
    type: 'article'
  }

  return (
    <Page heading='Beep Taxi' meta={meta}>

      <Head>
        <meta
          content='https://drykiss.com/static/portfolio/beep-taxi/beep-taxi/hero.jpg?v=1.00'
          key='og:image'
          property='og:image'
        />
      </Head>

      <Row>
        <Column md={12}>
          <Image
            alt='Beep Taxi'
            src='/static/portfolio/beep-taxi/beep-taxi/hero.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />
          <Link to='http://www.getreading.co.uk/news/local-news/now-you-can-beep-you-4263837'>
            <a target='_blank'>Beep Taxi</a>
          </Link>
          <p />

          <Heading content='Tasks' tag='h3' />

          <Heading content='Project Duration' tag='h3' />

          <Heading content='Outcome' tag='h3' />

          <Heading content='Team' tag='h3' />

          <List>
            <ListItem>Ian Warner - Developer</ListItem>
          </List>
        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />
          <p>Beep Taxi was a revolutionary automated taxi ordering system. Created in 2005 it included most of the mechanics we now see on Uber or Hailo. However the smartphone was not in existence then!</p>
          <p>At its basic level it matched client to taxi through various means including; mobile triangulation; postcode voice recognition and GPS if available. It would then match the nearest driver and route the call directly to their hands free mobile.</p>
          <p>Beep was all about putting the user in control. Providing safety options such as call recording and constant taxi tracking. Beep would simply take 1 per journey.</p>
          <p>Unfortunately due to lack of funding Beep Taxi was closed in 2007; it's a shame to think that Britain could have had a billion dollar business like Uber in 2005, if back then we had the investment mentality like in the US.
          </p>

          <p>DryKISS as a partner, were tasked with the technical architecture and development of this complex system.</p>
          <p>Firstly we needed to track the Taxi, to do this a custom GPS / GSM device was manufactured and installed in over 100 test taxis in Reading. A basic toggle switch alerted the system of the vehicle's availability. Each was also fitted with a SIM to provide the location data we required.</p>
          <p>To locate the client we crafted an IVR platform that provided all the options the user would need to book a taxi. If they called on a mobile phone we would instantly locate them; a land line, prompted the IVR to ask for a postcode through voice recognition. Additional prompts asked if they wanted the taxi now or in the future. Culminating in the call being routed to the nearest available Beep driver, to give reassurance of pick-up time and location.
          </p>
          <p>An after journey rating system was created by sending the user an SMS, they simply needed to reply with a 1-5 score.</p>
          <p>Lastly a complex back office and API platform was developed to handle all the IVR information; GPS data from the taxis and order routing. Algorithms processed the best taxi for the user based on distance, ratings and journey time. A full reporting engine gave the business the transparency of best drivers, popular pick up areas and advocate customers. Also the means to invoice and track payments from drivers.</p>
        </Column>
      </Row>
    </Page>
  )
}
