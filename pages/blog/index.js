/**
 * Blog
 * Imports the list of articles to build the Blog home page
 */

// Config
import { Blog, Facebook } from 'config'

// UI
import { BlogCategories, BlogHero, BlogSidebar, Column, Page, Row } from 'industry-ui'

// Data
import { Articles } from 'data/blog'

export default () => {
  const meta = {
    description: `DryKISS is a full service internet and mobile digital production house. Our
      services span consulting, strategy; planning; development; testing and analytics.`,
    path: Blog.path,
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page meta={meta}>
      <Row>
        <Column lg={8}>
          <BlogHero articles={Articles} config={Blog} />
          <BlogCategories articles={Articles} config={Blog} />
        </Column>

        <Column lg={4}>
          <BlogSidebar articles={Articles} config={Blog} facebook={Facebook} />
        </Column>
      </Row>
    </Page>
  )
}
