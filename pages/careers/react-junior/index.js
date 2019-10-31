/**
 * Careers - React
 * Junior React Position - Valencia
 */

// UI
import { Button, Heading, List, ListItem, Page } from 'industry-ui'

export default () => {
  const meta = {
    description: `DryKISS wants a junior react developer to join the growing team in Valencia Spain.
      This is a full time position with flexible eveything. Click to view the requirements and
      apply.`,
    path: '/careers/react-junior',
    title: 'Junior React Developer Required in Valencia Spain'
  }

  return (
    <Page heading='Careers - Junior React Developer' meta={meta}>
      <p>
        <b>ONLY Individuals need to Apply Please</b>
        <br />
        <b>
          Our preference would be someone Valencia or Spain based, but will consider Europe time
          zone.
        </b>
      </p>

      <Heading content='Description' tag='h2' />

      <p>
        DryKiss is a startup web development company building MPVs. We are a full-service
        development production studio, crafting high-quality code to drive innovative products.
      </p>

      <p>
        Our team is distributed but dedicated to constant learning and improvement wherever we are.
      </p>

      <Heading content='You are:' tag='h3' />

      <List>
        <ListItem>1 to 2+ experience in Front-end development.</ListItem>
        <ListItem>Some experience in developing with React.</ListItem>
        <ListItem>Front-end / services : Node.js/Express.js/MongoDB/Redis</ListItem>
        <ListItem>Ability to write high-performance, reusable code for UI components.</ListItem>
        <ListItem>
          Experienced in CI including git, aws, docker, Node.js microservice stack etc.
        </ListItem>
        <ListItem>Experience with MySQL databases.</ListItem>
        <ListItem>Experience working with AWS.</ListItem>
        <ListItem>Experience working with and designing RESTful APIs.</ListItem>
        <ListItem>
          Confident using Git &amp; Gitlab and working in an Agile (Kanban) workplace.
        </ListItem>
        <ListItem>
          Excited about working with GraphQL and React/ReactNative, MaterialUI and potentially
          TensorFlow, Highcharts/D3.
        </ListItem>
        <ListItem>Fluent with Agile Methodologies (Scrum).</ListItem>
        <ListItem>
          Able to demonstrate the ability to code efficiently, learn quickly and communicate very
          fluidly with the rest of the team.
        </ListItem>
        <ListItem>
          A strategic thinker with operational skills able to guide a project through its full
          lifecycle.
        </ListItem>
        <ListItem>
          Export in all kinds of testing best practices; writing clean and maintainable code. You
          care about high quality, performant, and maintainable code.
        </ListItem>
        <ListItem>
          Helpful, Humble, Human, not a machine. Understand what people want before they know
          themselves.
        </ListItem>
        <ListItem>English speaking.</ListItem>
      </List>

      <Heading content='You will:' tag='h3' />

      <List>
        <ListItem>
          Work to design features, prototype new components, and evaluate technical feasibility.
        </ListItem>
        <ListItem>
          Build out our CI approaches and recommend best practices to speed up development
          processes.
        </ListItem>
        <ListItem>Operate within a highly collaborative, cross-functional environment.</ListItem>
        <ListItem>Use modern software engineering approaches and agile framework.</ListItem>
        <ListItem>Contribute to high-level strategic decisions.</ListItem>
        <ListItem>Collaborate on design and UX.</ListItem>
      </List>

      <Heading content='Please apply with:' tag='h3' />

      <List>
        <ListItem>
          A link to a{' '}
          <a href='https://www.loom.com/' target='_blank' rel='noopener noreferrer'>
            LOOM
          </a>{' '}
          video presenting (with voice) something you have worked on - even if it's as simple as a
          button design.
        </ListItem>
        <ListItem>Day rate in € in your application.</ListItem>
        <ListItem>Most recent projects/designs/code if available.</ListItem>
        <ListItem>Your availability.</ListItem>
        <ListItem>Location (or where you might be located).</ListItem>
        <ListItem>Experience working remote/in a distributed team.</ListItem>
      </List>

      <Button
        as='a'
        href='https://angel.co/company/drykissltd/jobs/653800-junior-react-developer-freelance-contractor'
        content='Apply on Angel List'
        size='lg'
        target='_blank'
      />

      <p>
        Applications who don't answer these questions won't be entertained (it also means you
        haven't read the end of this!
      </p>
    </Page>
  )
}
