/**
 * Home
 *
 * @see https://www.figma.com/file/Wpd0TYwwu2njqurECo5qOHAH/Landing-Pages?node-id=1%3A2
 */

// Layout
import { Page } from 'layout/page'

// UI
import {
  Column,
  Container,
  Blockquote,
  Heading,
  Hero,
  Row
} from 'industry-ui'

// Style
import styled from 'styled-components'

export default () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page meta={meta}>

      <StyledHero
        background='/static/sections/kiss.jpg'
        strapline={`
          London web and mobile development. Crafting modern digital mobile and
          web solutions; using state of the art technologies; within
          disciplined processes. Don't Repeat Yourself  Keep it simple, stupid
        `}
        title='DryKISS'
      />

      <Container>

        <Blockquote
          footer='Understand | Architect | Craft'
          text='Ethos'
        />

        <Row>

          <Column md={3}>

            <p>
              Modern applications are not just about a distinctive design or
              utilising cutting edge technologies. They are user centric,
              analytic based, growth machines.
            </p>

            <p>
              At DryKISS we encourage a research based project cycle, to meet
              these ever changing UX needs.
            </p>

          </Column>

          <Column md={3}>

            <p>
              <strong>UNDERSTAND:</strong> At DryKISS we want to learn about
              your user, business and the reasons behind embarking on this new
              project.
            </p>

            <p>
              We can create personas, storyboards and initial prototypes to
              help guide these critical early decisions.
            </p>

          </Column>

          <Column md={3}>

            <p>
              <strong>ARCHITECT:</strong> DryKISS will draft a user centric
              development approach which can include technology reasoning;
              product backlog; continuous integration plan; definition of done
              and sprint milestones.
            </p>

            <p>
              Social integration, SEO and marketing guidance. All through the
              lens of your deadlines and budget.
            </p>

          </Column>

          <Column md={3}>

            <p>
              <strong>CRAFT:</strong> Our crafting is all about rapid feature
              completion. We want the user to test a story as quickly as
              possible.
            </p>

            <p>
              Building from a pattern library, is what we call Atomic
              Development. CodeBlender accelerates this process with
              pre-defined common patterns that can be styled and deployed.
            </p>

          </Column>

        </Row>

        <Blockquote
          footer='We pride ourselves on offering a full-service, economic and future technology approach.'
          text='Our Services'
        />

        <Row>

          <Column md={4}>

            <Heading content='User Experience' tag='h3' />

            <p>
              We help brands create valuable experiences across digital
              channels by focusing on the habits and needs of their audience.
              Our user experience team will transform the quality of your
              products, the happiness of your customers and the success of
              your business.
            </p>

          </Column>

          <Column md={4}>

            <Heading content='Creativity' tag='h3' />

            <p>
              Focused creativity is the engine for all we do. Our
              cross-platform, and specifically mobile experience makes our
              approach always flexible, responsive and dynamic. From initial
              concepts through to final design our creative teams and
              developers create compelling and unique brand experiences.
            </p>

          </Column>

          <Column md={4}>

            <Heading content='Development' tag='h3' />

            <p>
              By using the best and latest frameworks we are not re- inventing
              the wheel, but delivering projects based on known processes.
              This enables us to deliver cutting edge code quickly and within
              budget.
            </p>

          </Column>

        </Row>

      </Container>

    </Page>
  )
}

const StyledHero = styled(Hero)`
  h1, h2 {
    background-color: rgba(240, 0, 0, .5);
    border-radius: 5px;
    color: #fff;
    padding: 10px;
    text-shadow: 0 2px 2px rgba(0, 0, 0, .5);
  }
`
