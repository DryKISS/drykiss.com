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
import { useRouter } from 'next/router'

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

export default () => {
  const INITIAL_STATE = {
    description: 'DryKISS blog article',
    title: 'DryKISS blog article'
  }

  const [article, setArticle] = useState({ ...INITIAL_STATE })
  const [articleParams, setArticleParams] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { query } = useRouter()

  useEffect(() => {
    setArticleParams(query.articleId)

    if (articleParams) {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process()
      }

      if (window.FB) {
        window.FB.XFBML.parse()
      }

      const filtered = find(articles.ARTICLES, (o) => { return o.slug === query.articleId })
      setArticle(filtered)
      setIsLoading(false)
    }
  }, [query, articleParams])

  const meta = {
    description: article.description,
    path: `${Blog.path}/${query.categoryId}/${query.articleId}`,
    title: article.title
  }

  return (
    <>
      {!isLoading &&
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

            <Row>

              <Column lg={8}>
                <Article article={article} config={Blog} facebook={Facebook} />
              </Column>

              <Column lg={4}>
                <BlogSidebar
                  articles={articles.ARTICLES}
                  config={Blog}
                  facebook={Facebook}
                />
              </Column>

            </Row>
          </Container>
        </Page>
      }
    </>
  )
}
