/**
 * Careers - Senior React Position - Valencia
 */

// UI
import { Button, Heading, List, ListItem, Page, Space, Text } from '@drykiss/industry-ui'

const PageCareersReact = () => {
  const meta = {
    description: `DryKISS wants a remote senior react developer to join our growing team. This is a
    full time position with flexible everything. Click to view the requirements and apply.`,
    path: '/careers/react',
    title: 'Senior React Developer Required in Valencia Spain'
  }

  return (
    <Page pageHeading={{ heading: 'Careers - Senior React Developer' }} meta={meta}>
      <Heading content='Description' tag='h2' />

      <Text>
        DryKISS is looking for a passionate, dedicated, and talented Senior React Engineer who has
        experience building innovative, mission critical web applications.
      </Text>

      <Space />

      <Text>
        You will have an opportunity to make a large impact on the design, UX, architecture, and
        development of how DryKISS operates. In this role, you will:
      </Text>

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
        <ListItem>5+ years front end developemnt experience.</ListItem>
        <ListItem>3+ years developing with React</ListItem>
        <ListItem>Experience with Storybook</ListItem>
        <ListItem>Experience with Styled Components</ListItem>
        <ListItem>Experience with NextJS</ListItem>
        <ListItem>Experience with Hasura</ListItem>
        <ListItem>Ability to write high-performance, reusable code for UI components.</ListItem>
        <ListItem>
          Expert in all kinds of testing best practices; writing clean and maintainable code.
        </ListItem>
        <ListItem>Experienced in CI including git, aws, docker, etc.</ListItem>
        <ListItem>Understanding of NodeJS backend architecture and developement.</ListItem>
        <ListItem>
          English speaking and able to communicate problems before they arise at all levels.
        </ListItem>
      </List>

      <Heading content='Benefits' tag='h3' />

      <List>
        <ListItem>Fully Remote</ListItem>
        <ListItem>Training budget is available</ListItem>
        <ListItem>10% time, we will work on your ideas with you, using DryKISS stack.</ListItem>
        <ListItem>Flexible work time, we focus on delivery.</ListItem>
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

      <Space />
    </Page>
  )
}

export default PageCareersReact
