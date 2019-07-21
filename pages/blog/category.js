/**
 * Blog - Category Template
 * Lists all the articles in the category selected
 *
 * - Paginated
 * - 10 to a page
 */

// Layout
import { Page } from 'layout/page'

// Config
import { Blog, Facebook } from 'config'

// UI
import {
  capitalize,
  BlogListing,
  BlogSidebar,
  Column,
  Container,
  PageHeading,
  Row
} from 'industry-ui'

// Data
import articles from 'data/blog'

const CategoryTemplate = ({ category }) => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: `${Blog.path}/${category}`,
    title: `DryKISS develops hybrid mobile and responsive websites`
  }

  return (
    <Page meta={meta}>
      <Container>

        <PageHeading heading={capitalize(category)} />

        <Row>

          <Column lg={8}>
            <BlogListing articles={articles.ARTICLES} category={category} />
          </Column>

          <Column lg={4}>
            <BlogSidebar articles={articles.ARTICLES} facebook={Facebook} />
          </Column>

        </Row>

      </Container>
    </Page>
  )
}

CategoryTemplate.getInitialProps = async ({ query }) => {
  const category = await query.category
  return { category }
}

export default CategoryTemplate
