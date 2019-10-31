/**
 * Blog - Tag Template
 * Lists all the articles in the selected tag
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

export default ({ tag }) => {
  const meta = {
    description: `Articles tagged: ${tag}`,
    path: `${Blog.path}/tag/${tag}`,
    title: `Tagged: ${tag}`
  }

  return (
    // <Page heading={`Tagged: ${capitalize(tag)}`} meta={meta}></Page>
    <Page heading='Tagged' meta={meta}>
      <Row>
        <Column lg={8}>
          <BlogListing articles={Articles} config={Blog} tag={tag} />
        </Column>

        <Column lg={4}>
          <BlogSidebar articles={Articles} facebook={Facebook} />
        </Column>
      </Row>
    </Page>
  )
}
