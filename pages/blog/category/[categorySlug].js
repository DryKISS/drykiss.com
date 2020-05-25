/**
 * Blog - Category Template
 * Lists all the articles in the category selected
 *
 * - Paginated
 * - 10 to a page
 */

// Next
import { useRouter } from 'next/router'

// Config
import { Blog, Facebook } from 'config'

// UI
import { BlogListing, BlogSidebar, Column, Page, Row } from 'industry-ui'

// Data
import { Articles } from 'data/blog'

export default ({ category }) => {
  const { query } = useRouter()

  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: `${Blog.path}/${query.categorySlug}`,
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    // <Page heading={capitalize(query.categorySlug)} meta={meta}></Page>
    <Page pageHeading={{ heading: 'Category' }} meta={meta}>
      <Row>
        <Column lg={8}>
          <BlogListing articles={Articles} category={category} />
        </Column>

        <Column lg={4}>
          <BlogSidebar articles={Articles} facebook={Facebook} />
        </Column>
      </Row>
    </Page>
  )
}
