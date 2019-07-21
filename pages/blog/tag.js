/**
 * Blog - Tag Template
 * Lists all the articles in the selected tag
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

const TagTemplate = ({ tag }) => {
  const meta = {
    description: `Articles tagged: ${tag}`,
    path: `${Blog.path}/tag/${tag}`,
    title: `Tagged: ${tag}`
  }

  return (
    <Page meta={meta}>
      <Container>

        <PageHeading heading={`Tagged: ${capitalize(tag)}`} />

        <Row>

          <Column lg={8}>
            <BlogListing articles={articles.ARTICLES} config={Blog} tag={tag} />
          </Column>

          <Column lg={4}>
            <BlogSidebar articles={articles.ARTICLES} facebook={Facebook} />
          </Column>

        </Row>

      </Container>
    </Page>
  )
}

TagTemplate.getInitialProps = async ({ query }) => {
  const tag = await query.tag

  return { tag }
}

export default TagTemplate
