/**
 * Careers - React
 * Senior React Position - Valencia
 *
 * @see https://www.tecnoempleo.com/senior-frontend-development-engineer-valencia/react-javascript-git/rf-4bd6xc71aqa64f62849c
 */

// Layout
import { Page } from 'layout/page'

// UI
import {
  Container,
  Heading,
  PageHeading,
  List
} from 'industry-ui'

export default () => {
  const meta = {
    description: `
      DryKISS wants a senior react developer to join the growing team in Valencia
      Spain. This is a full time position with flexible eveything. Click to view
      the requirements and apply.
    `,
    path: '/careers/react',
    title: 'Senior React Developer Required in Valencia Spain'
  }

  return (
    <Page meta={meta}>
      <Container>

        <PageHeading heading='Careers - Senior React Developer' />

        <Heading content='Description' tag='h2' />

        <p>
          DryKISS is looking for a passionate, dedicated, and talented
          Senior React Engineer who has experience building innovative, mission
          critical web applications.
        </p>

        <p>
          You will have an opportunity to make a large impact on the design,
          architecture, and development of how DryKISS operates. In this role,
          you will:
        </p>

        <List>
          <span>
            Own one of our project SDLC.
          </span>
          <span>
            Work to design features, prototype new components, and evaluate
            technical feasibility.
          </span>
          <span>
            Build out our CI approaches and recommend best practices to speed up
            development processes.
          </span>
          <span>
            Operate within a team using modern software engineering approaches
            and an agile framework.
          </span>
        </List>

        <Heading content='Our Needs' tag='h2' />

        <List>
          <span>
            4+ years front end developemnt experience.
          </span>
          <span>
            2+ years developing with React
          </span>
          <span>
            Ability to write high-performance, reusable code for UI components.
          </span>
          <span>
            Export in all kinds of testing best practices; writing clean
            and maintainable code.
          </span>
          <span>
            Experienced in CI including git, aws, docker, etc.
          </span>
          <span>
            English speaking and able to communicate problems before they arise
            at all levels.
          </span>
        </List>

        <Heading content='Benefits' tag='h2' />

        <List>
          <span>
            Office in City Center
          </span>
          <span>
            Training budget, including language lessons are available.
          </span>
          <span>
            10% time, we will work on your ideas with you, using DryKISS stack.
          </span>
          <span>
            Flexible work time, we just like to get the job done.
          </span>
        </List>

        <Heading content='Offer Details' tag='h2' />

        <List>
          <span>
            Able to communicate in English
          </span>
          <span>
            Training budget, including language lessons are available.
          </span>
          <span>
            Contract Salary: Based on experience.
          </span>
        </List>

      </Container>
    </Page>
  )
}
