/**
 * Guides - NextJS - Anatomy
 */

// UI
import { List, Page } from 'industry-ui'

export default () => {
  const meta = {
    description: 'Using NextJS and ReactJS to create the perfect page anatomy',
    path: '/guides/linting',
    title: 'NextJS, Anatomy of a Page.'
  }

  return (
    <Page heading='Anatomy of a Page' meta={meta}>
      <p>Hidden elements of a web page can be</p>

      <List>
        <span>Meta properties</span>
        <span>Responsive</span>
        <span>Accesibility</span>
        <span>Micro formats</span>
        <span>Accesibility</span>
      </List>

      <p>The basic building blocks of a web page can be considered to be made of the following.</p>

      <List>
        <span>Navigation</span>
        <span>Headings</span>
        <span>Body</span>
        <span>Footer</span>
        <span>Cookie acceptance</span>
      </List>
    </Page>
  )
}
