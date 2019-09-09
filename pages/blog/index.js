/**
 * Blog
 * Imports the list of articles to build the Blog home page
 */

// Layout
import { Page } from 'layout/page'

// Config
import { Blog, Facebook } from 'config'

// UI
import {
  BlogCategories,
  BlogHero,
  BlogSidebar,
  Column,
  Row
} from 'industry-ui'

// Data
import articles from 'data/blog'

export default () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: Blog.path,
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page meta={meta}>
      <Row>

        <Column lg={8}>
          <BlogHero articles={articles.ARTICLES} config={Blog} />
          <BlogCategories articles={articles.ARTICLES} config={Blog} />
        </Column>

        <Column lg={4}>
          <BlogSidebar articles={articles.ARTICLES} config={Blog} facebook={Facebook} />
        </Column>

      </Row>
    </Page>
  )
}
