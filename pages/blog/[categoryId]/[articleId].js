/**
 * Blog - Article Template
 * Shows the article
 *
 * - Find the article from the Data using the slug
 */

// React
import { useEffect } from 'react'

// Lodash
import find from 'lodash/find'

// Next
import Head from 'next/head'

// Config
import { Blog, Facebook } from 'config'

// UI
import { Article, BlogSidebar, Column, Page, Row } from '@drykiss/industry-ui'

// Data
import { Articles } from 'data/blog'

const BlogArticle = ({ article, query }) => {
  useEffect(() => {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process()
    }

    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }, [])

  const meta = {
    description: article.description,
    path: `${Blog.path}/${query.categoryId}/${query.articleId}`,
    title: article.title
  }

  return (
    <Page meta={meta}>
      <Head>
        <meta
          content={`https://drykiss.com/static/blog/${article.slug}/hero.jpg?v=1.00`}
          key='og:image'
          property='og:image'
        />
        <script async defer key='instagram' src='https://platform.instagram.com/en_US/embeds.js' />
      </Head>

      <Row>
        <Column lg={8}>
          <Article article={article} config={Blog} facebook={Facebook} />
        </Column>

        <Column lg={4}>
          <BlogSidebar articles={Articles} config={Blog} facebook={Facebook} />
        </Column>
      </Row>
    </Page>
  )
}

BlogArticle.getInitialProps = async ({ query }) => {
  const filtered = await find(Articles, o => {
    return o.slug === query.articleId
  })

  return { article: filtered, query: query }
}

export default BlogArticle
