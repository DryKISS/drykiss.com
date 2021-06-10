import { Row, Breadcrumb } from '@drykiss/industry-ui'
import BlogCard from '../../components/common/blogCard'
import AC from '../../components/adaptorComponent'
import styled, { css } from 'styled-components'
import LetsTalkSection from '../../components/our-services/letsTalkSection'
import { MaxContainer } from '../../components/common/maxContainer'
const blogCardData = [
  {
    image: '/images/insights/1.png',
    title: 'Going against the grain, AngelPad kills its demo',
    descs:
      'It’s no secret that much of the legal industry is build on reusable content. Most law firms  have their own customized set of standard…',
    bottomLink: {
      title: 'Read more',
      to: ''
    }
  },
  {
    image: '/images/insights/2.png',
    title: 'Lawyaw uses AI to help lawyers draft faster',
    descs:
      'It’s no secret that much of the legal industry is build on reusable content. Most law firms  have their own customized set of standard…',
    bottomLink: {
      title: 'Read more',
      to: ''
    }
  },
  {
    image: '/images/insights/3.png',
    title: 'Tumblr confirms 84 accounts linked to the main stream',
    descs:
      'It’s no secret that much of the legal industry is build on reusable content. Most law firms  have their own customized set of standard…',
    bottomLink: {
      title: 'Read more',
      to: ''
    }
  },
  {
    image: '/images/blog/1.png',
    title: 'Going against the grain, AngelPad kills its demo',
    descs:
      'It’s no secret that much of the legal industry is build on reusable content. Most law firms  have their own customized set of standard…',
    bottomLink: {
      title: 'Read more',
      to: ''
    }
  },
  {
    image: '/images/blog/2.png',
    title: 'Lawyaw uses AI to help lawyers draft faster',
    descs:
      'It’s no secret that much of the legal industry is build on reusable content. Most law firms  have their own customized set of standard…',
    bottomLink: {
      title: 'Read more',
      to: ''
    }
  },
  {
    image: '/images/blog/3.png',
    title: 'Tumblr confirms 84 accounts linked to the main stream',
    descs:
      'It’s no secret that much of the legal industry is build on reusable content. Most law firms  have their own customized set of standard…',
    bottomLink: {
      title: 'Read more',
      to: ''
    }
  }
]
const headCard = {
  image: '/images/blog/head.png',
  title: 'Tumblr confirms 84 accounts linked to the main stream',
  descs:
    'It’s no secret that much of the legal industry is build on reusable content. Most law firms  have their own customized set of standard…',
  bottomLink: {
    title: 'Read more',
    to: ''
  }
}
const breadcrumbs = [
  {
    to: '/',
    title: 'Home'
  },
  {
    to: {
      as: '/blog',
      href: {
        pathname: '/insight',
        query: {
          category: 'blog'
        }
      }
    },
    title: 'insight'
  }
]

const BlogPage = () => {
  return (
    <>
      <AC
        as={MaxContainer}
        customCss={css`
          position: absolute;
          left: 0;
          nav {
            padding: 0 !important;
          }
          ol {
            padding-top: 0.25rem;
            padding-left: 0;
            margin-left: -0.45rem;
          }
          span {
            font-size: 1rem;
          }
        `}
      >
        <Breadcrumb breadcrumbs={breadcrumbs} separator="\" />
      </AC>
      <StyledMaxContainer>
        <AC as={BlogCard} full item={headCard} maxWidth="100%" />
      </StyledMaxContainer>
      <AC
        as={MaxContainer}
        mb="6rem"
        smStyles={{
          pX: '1rem'
        }}
      >
        <Row>
          {blogCardData.map((item, index) => {
            return <AC as={BlogCard} key={index} item={item} mb="2rem" />
          })}
        </Row>
      </AC>
      <LetsTalkSection />
    </>
  )
}
const StyledMaxContainer = styled(MaxContainer)`
  margin-top: 2rem;
`

export default BlogPage
