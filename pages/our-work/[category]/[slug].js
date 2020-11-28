/**
 * Our Work - Show
 */

// Styled Components
import styled from 'styled-components'

// UI
import { OurWorkShow, Page, Paragraph, SectionHeading, SectionSubHeading } from 'components'

// Next
import Head from 'next/head'

// Data
import { PORTFOLIO_FACEBOOK, PORTFOLIO_MOBILE, PORTFOLIO_SITES, PORTFOLIO_WORDPRESS } from 'data'

const DATA = [
  ...PORTFOLIO_SITES,
  ...PORTFOLIO_FACEBOOK,
  ...PORTFOLIO_WORDPRESS,
  ...PORTFOLIO_MOBILE
]

export async function getStaticPaths () {
  return {
    paths: DATA.map(item => ({ params: { category: item.type, slug: item.slug } })),
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const { category, slug } = params
  const work = DATA.find(item => item.type === category && item.slug === slug)

  return {
    props: { namespacesRequired: ['use-cases-show'], work }
  }
}

const PageOurWorkShow = ({ work }) => {
  const meta = {
    description: work.meta?.description || work.title,
    title: work.meta?.title || work.title,
    author: work.author,
    type: work.type
  }

  return (
    <Page
      heroHeading='Our Work'
      heroSubHeading='Talk to us to transform your projects idea into a working digital products'
      meta={meta}
    >
      <Head>
        <meta content={work.cover} key='og:image' property='og:image' />
      </Head>

      <OurWorkShow data={work} />
    </Page>
  )
}

export default PageOurWorkShow
