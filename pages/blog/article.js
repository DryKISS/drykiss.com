/**
 * Blog - Article Template
 * Shows the article
 *
 * - Find the article from the Data using the slug
 */

// React
import { useEffect, useState } from 'react'

// Lodash
import find from 'lodash/find'

// Next
import Head from 'next/head'

// Layout
import { Page } from 'layout/page'

// Config
import { Blog, Facebook } from 'config'

// UI
import {
  Article,
  BlogSidebar,
  Column,
  Container,
  Row
} from 'industry-ui'

// Data
import articles from 'data/blog'

const ArticleTemplate = ({ articleSlug, category }) => {
  const [article, setArticle] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process()
    }

    if (window.FB) {
      window.FB.XFBML.parse()
    }

    setArticle(find(articles.ARTICLES, (o) => { return o.slug === articleSlug }))
    setIsLoading(false)
  }, [])

  const meta = {
    description: article.description,
    path: `${Blog.path}/${article.slug}`,
    title: article.title
  }

  return (
    <Page meta={meta}>

      <Head>
        <script
          async
          defer
          key='instagram'
          src='https://platform.instagram.com/en_US/embeds.js'
        />
      </Head>

      <Container>
        {!isLoading &&
          <Row>

            <Column lg={8}>
              <Article article={article} config={Blog} facebook={Facebook} />
            </Column>

            <Column lg={4}>
              <BlogSidebar articles={articles.ARTICLES} config={Blog} facebook={Facebook} />
            </Column>

          </Row>}
      </Container>
    </Page>
  )
}

ArticleTemplate.getInitialProps = async ({ query }) => {
  const articleSlug = await query.articleSlug
  const category = await query.category

  return { articleSlug, category }
}

export default ArticleTemplate
