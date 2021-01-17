/**
 * Our Work - Show
 */

// Styled Components
import styled from 'styled-components'

// UI
import { CareerShow, Page, Paragraph, SectionHeading, SectionSubHeading } from 'components'

// Next
import Head from 'next/head'

// Data
import { CAREERS } from 'data'

export async function getStaticPaths () {
  return {
    paths: CAREERS.map(item => ({ params: { slug: item.slug } })),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const { slug } = params
  const career = CAREERS.find(item => item.slug === slug)

  return {
    props: { career }
  }
}

const PageCareerShow = ({ career }) => {
  const meta = {
    description: career.meta?.description || career.title,
    title: career.meta?.title || career.title
  }

  return (
    <Page heroHeading='Careers' heroSubHeading={career.title} meta={meta}>
      <Head>
        <meta content={career.cover} key='og:image' property='og:image' />
      </Head>

      <CareerShow data={career} />
    </Page>
  )
}

PageCareerShow.defaultProps = {
  career: {}
}

export default PageCareerShow
