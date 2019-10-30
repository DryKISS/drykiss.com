/**
 * Careers - React
 * Senior React Position - Valencia
 *
 * @see https://www.tecnoempleo.com/senior-frontend-development-engineer-valencia/react-javascript-git/rf-4bd6xc71aqa64f62849c
 */

// UI
import { Button, Heading, List, ListItem, Page } from 'industry-ui'

export default () => {
  const meta = {
    description: `DryKISS wants a intern react developer to join the growing team in Valencia Spain.
      This is a full time position with flexible eveything. Click to view the requirements and
      apply.`,
    path: '/careers/react-intern',
    title: 'Intern React Developer Required in Valencia Spain'
  }

  return (
    <Page heading='Careers - Intern React Developer' meta={meta}>
      <p>
        <b>ONLY Individuals need to Apply Please</b>
        <br />
        <b>
          Our preference would be someone Valencia or Spain based, but will consider Europe time
          zone
        </b>
      </p>

      <Heading content='Description' tag='h2' />

      <p>
        Are you just started out in web development but need some working experience? Some
        mentorship? Keen to learn and grow?
      </p>

      <p>Improve your coding skills and build something real you can showcase to the world!</p>

      <p>
        DryKiss is a startup web development company building MPVs. We are a full-service
        development production studio, crafting high-quality code to drive innovative products.
      </p>

      <p>
        Our team is distributed but dedicated to constant learning and improvement wherever we are.
      </p>

      <Heading content='You are:' tag='h3' />

      <List>
        <ListItem>
          0+ experienced or just finishing an extensive coding Bootcamp? We are after keen,
          communicative, highly curious people who have the theory but not yet the full experience!
        </ListItem>
        <ListItem>
          Able to demonstrate the ability to code efficiently, learn quickly and communicate very
          fluidly with the rest of the team.
        </ListItem>
        <ListItem>
          A strategic thinker with operational skills able to guide a project through its full
          lifecycle.
        </ListItem>
        <ListItem>You care about high quality, performant, and maintainable code.</ListItem>
        <ListItem>
          You love being able to switch between different projects and jump in anywhere from
          javascript frontends, node backends, and microservices.
        </ListItem>
        <ListItem>
          Helpful, Humble, Human, not a machine. Understand what people want before they know
          themselves.
        </ListItem>
        <ListItem>Love for experimentation and constant learning!</ListItem>
        <ListItem>English speaking as most of our Loom videos are recorded in English!</ListItem>
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

      <Heading content='Offer:' tag='h3' />

      <List>
        <ListItem>
          3 month internship remote (Europe time zone). Available between 9.30am - 2.30pm Spain time
          (we have a 10.30am daily standup).
        </ListItem>
        <ListItem>
          Teamwork follows an Agile methodology - Scrum with short cycles (2 weeks).
        </ListItem>
        <ListItem>Gain experience in Front end development.</ListItem>
        <ListItem>Add awesome experience to your resume.</ListItem>
        <ListItem>Possibility to grow into a Full-time Junior role with us!</ListItem>
      </List>

      <Heading content='Please apply with:' tag='h3' />

      <List>
        <ListItem>
          A link to a{' '}
          <a href='https://www.loom.com/' target='_blank' rel='noopener noreferrer'>
            LOOM
          </a>{' '}
          video presenting (with voice) something you have worked on - even if it's as simple as a
          button design in a school project.
        </ListItem>
        <ListItem>Most recent projects/designs/code if available.</ListItem>
        <ListItem>Your availability.</ListItem>
        <ListItem>Location (or where you might be located).</ListItem>
        <ListItem>Experience working remote/in a distributed team.</ListItem>
      </List>

      <Button
        as='a'
        href='https://angel.co/company/drykissltd/jobs/653781-front-end-developer-intern'
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
