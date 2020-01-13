/**
 * Guides - Continuous Intergration - Github
 */

// UI
import { Heading, List, ListItem, Page } from 'industry-ui'

export default () => {
  const meta = {
    description: 'How DRYKISS utilise Github and workflows to acheive a coherrent CI process.',
    path: '/guides/continuous-intergration/github',
    title: 'GitHub at DRYKISS'
  }

  return (
    <Page heading='Github' meta={meta}>
      <p>
        This is a guide on how DRYKISS utilise{' '}
        <a href='https://git-scm.com' target='_blank' rel='noopener noreferrer'>
          GIT
        </a>{' '}
        and{' '}
        <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
          Github
        </a>{' '}
        within out continuous intergration practices.
      </p>

      <Heading content='Setup' noMargin tag='h2' />

      <p>
        If you don’t have a{' '}
        <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
          Github
        </a>{' '}
        account, you must use your work email (rather than your personal email) to sign up, as this
        helps us with identification. If you do have a GitHub account, please{' '}
        <a href='https://github.com/settings/emails' target='_blank' rel='noopener noreferrer'>
          add your work email to your profile
        </a>{' '}
        as your primary email.
      </p>

      <Heading content='Set up two-factor authentication' noMargin tag='h3' />

      <p>
        This is a requirement to access DRYKISS development teams. Please{' '}
        <a href='https://github.com/settings/security' target='_blank' rel='noopener noreferrer'>
          enable 2FA
        </a>{' '}
        as soon as possible.
      </p>

      <Heading content='Complete your profile' noMargin tag='h3' />

      <p>Include the following:</p>
      <List>
        <ListItem>Name: Your first or first and last name.</ListItem>
        <ListItem>Location: Your primary work location (city, state).</ListItem>
        <ListItem>Photo: A headshot photo, or an image that is unique to you.</ListItem>
      </List>

      <Heading content='Turn notifications on' noMargin tag='h3' />

      <p>
        It's important that you stay up to date with notifications so please{' '}
        <a
          href='https://github.com/settings/notifications'
          target='_blank'
          rel='noopener noreferrer'
        >
          turn these on
        </a>
        . These may include comments on pull requests you are a member off. Promptly addressing
        these is important.
      </p>

      <Heading content='Join the Organisation' noMargin tag='h3' />

      <p>
        All engineering staff should be part of the{' '}
        <a href='https://github.com/DryKISS' target='_blank' rel='noopener noreferrer'>
          DRYKISS organisation.
        </a>{' '}
        Please make sure you have access to this and the repositories you need to work on. Ask in
        the Slack #security channel for any access requests.
      </p>

      <p>
        After you are added you should receive an email or visit{' '}
        <a
          href='https://github.com/orgs/DryKISS/invitation?via_email=1'
          target='_blank'
          rel='noopener noreferrer'
        >
          here.
        </a>
      </p>

      <Heading content='Make your membership public' noMargin tag='h3' />

      <p>
        Go to the{' '}
        <a href='https://github.com/orgs/DRYKISS/people' target='_blank' rel='noopener noreferrer'>
          DRYKISS
        </a>{' '}
        people page. Click where it says private next to your name. Change that to public.
      </p>

      <Heading content='Rules' noMargin tag='h2' />

      <List>
        <ListItem>Do not grant Admin rights to anyone.</ListItem>
        <ListItem>Do not store sensitive information in GitHub.</ListItem>
        <ListItem>Ask Security before integrating a service with GitHub.</ListItem>
      </List>

      <Heading content='Sensitive Data' noMargin tag='h2' />

      <p>
        It should be obvious that all sensitive company and personal data should not make it's way
        onto DRYKISS repositories.
      </p>

      <p>
        Files may include environment variables; private configuration data or sensitive information
        about the public.
      </p>

      <p>
        In the event that such variables or configuration data is pushed to a GitHub repository
        accidentally, even momentarily, consider it compromised and revoke or change the credentials
        immediately. Do not delete the commit itself!
      </p>

      <p>
        Contact the #security channel in slack immediately and give honest information about the
        incident. Further reading of how to clean up such an incident can be found here,{' '}
        <a href='https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository'>
          Removing sensitive data from a repository.
        </a>{' '}
        Do not attempt this cleanup let the trained security staff handle this.
      </p>

      {/* ## GIT
### Branching and merging
@see https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
Create a new branch and change to it, call the branch something descriptive,
maybe based on the Trello ticket being worked on.
git checkout -b belgium_language
 */}
    </Page>
  )
}
