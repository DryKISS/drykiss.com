/**
 * Careers - React
 * Senior React Position - Valencia
 */

// UI
import { Button, Heading, List, ListItem, Page } from 'industry-ui'

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
    <Page heading='Careers - Senior React Developer' meta={meta}>
      <Heading content='Description' tag='h2' />

      <p>
        DryKISS is looking for a passionate, dedicated, and talented Senior React Engineer who has
        experience building innovative, mission critical web applications.
      </p>

      <p>
        You will have an opportunity to make a large impact on the design, architecture, and
        development of how DryKISS operates. In this role, you will:
      </p>

      <List>
        <ListItem>Own one of our project SDLC.</ListItem>
        <ListItem>
          Work to design features, prototype new components, and evaluate technical feasibility.
        </ListItem>
        <ListItem>
          Build out our CI approaches and recommend best practices to speed up development
          processes.
        </ListItem>
        <ListItem>
          Operate within a team using modern software engineering approaches and an agile framework.
        </ListItem>
      </List>

      <Heading content='Our Needs' tag='h3' />

      <List>
        <ListItem>4+ years front end developemnt experience.</ListItem>
        <ListItem>2+ years developing with React</ListItem>
        <ListItem>Ability to write high-performance, reusable code for UI components.</ListItem>
        <ListItem>
          Export in all kinds of testing best practices; writing clean and maintainable code.
        </ListItem>
        <ListItem>Experienced in CI including git, aws, docker, etc.</ListItem>
        <ListItem>
          English speaking and able to communicate problems before they arise at all levels.
        </ListItem>
      </List>

      <Heading content='Benefits' tag='h3' />

      <List>
        <ListItem>Office in City Center</ListItem>
        <ListItem>Training budget, including language lessons are available.</ListItem>
        <ListItem>10% time, we will work on your ideas with you, using DryKISS stack.</ListItem>
        <ListItem>Flexible work time, we just like to get the job done.</ListItem>
      </List>

      <Heading content='Offer Details' tag='h3' />

      <List>
        <ListItem>Able to communicate in English</ListItem>
        <ListItem>Training budget, including language lessons are available.</ListItem>
        <ListItem>Contract Salary: Based on experience.</ListItem>
      </List>

      <Button
        as='a'
        href='https://angel.co/company/drykissltd/jobs/622601-senior-react-developer-freelance-contractor'
        content='Apply on Angel List'
        size='lg'
        target='_blank'
      />

      <p />
    </Page>
  )
}
