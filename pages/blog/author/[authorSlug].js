/**
 * Blog - Author Template
 * Lists all the articles in the category selected
 *
 * - Paginated
 * - 10 to a page
 */

// Config
import { Blog, Facebook } from 'config'

// UI
import { BlogListing, BlogSidebar, Column, Page, Row } from 'industry-ui'

// Data
import { Articles } from 'data/blog'

export default ({ author }) => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: `${Blog.path}/${author}`,
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    // <Page heading={`Author: ${capitalize(author)}`} meta={meta}></Page>
    <Page heading='Author' meta={meta}>
      <Row>
        <Column lg={8}>
          <BlogListing articles={Articles} author={author} />
        </Column>

        <Column lg={4}>
          <BlogSidebar articles={Articles} facebook={Facebook} />
        </Column>
      </Row>
    </Page>
  )
}
