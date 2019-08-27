/**
 * Blog - Author Template
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

const AuthorTemplate = ({ author }) => {
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
    <Page meta={meta}>
      <Container>

        <PageHeading heading={`Author: ${capitalize(author)}`} />

        <Row>

          <Column lg={8}>
            <BlogListing articles={articles.ARTICLES} author={author} />
          </Column>

          <Column lg={4}>
            <BlogSidebar articles={articles.ARTICLES} facebook={Facebook} />
          </Column>

        </Row>

      </Container>
    </Page>
  )
}

AuthorTemplate.getInitialProps = async ({ query }) => {
  const author = await query.author

  return { author }
}

export default AuthorTemplate
