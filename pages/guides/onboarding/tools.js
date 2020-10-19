/**
 * Guides - Onboarding - Tools
 */

// UI
import { List, ListItem, Page } from '@drykiss/industry-ui'

export default () => {
  const meta = {
    description: 'DryKISS try to use a minimial amount of tools to get the job done',
    path: '/guides/onboarding/tools',
    title: 'DryKISS everyday tools'
  }

  return (
    <Page pageHeading={{ heading: 'Tools' }} meta={meta}>
      <List>
        <ListItem>GitHub</ListItem>
        <ListItem>Slack</ListItem>
        <ListItem>ClickUp</ListItem>
        <ListItem>Figma</ListItem>
        <ListItem>QuickDBD</ListItem>
      </List>
    </Page>
  )
}
