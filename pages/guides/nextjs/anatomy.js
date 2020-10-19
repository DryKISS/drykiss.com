/**
 * Guides - NextJS - Anatomy
 */

// UI
import { List, ListItem, Page } from '@drykiss/industry-ui'

export default () => {
  const meta = {
    description: 'Using NextJS and ReactJS to create the perfect page anatomy',
    path: '/guides/nextjs/anatomy',
    title: 'NextJS, Anatomy of a Page.'
  }

  return (
    <Page pageHeading={{ heading: 'Anatomy of a Page' }} meta={meta}>
      <p>Hidden elements of a web page can be</p>

      <List>
        <ListItem>Meta properties</ListItem>
        <ListItem>Responsive</ListItem>
        <ListItem>Accesibility</ListItem>
        <ListItem>Micro formats</ListItem>
        <ListItem>Accesibility</ListItem>
      </List>

      <p>The basic building blocks of a web page can be considered to be made of the following.</p>

      <List>
        <ListItem>Navigation</ListItem>
        <ListItem>Headings</ListItem>
        <ListItem>Body</ListItem>
        <ListItem>Footer</ListItem>
        <ListItem>Cookie acceptance</ListItem>
      </List>
    </Page>
  )
}
