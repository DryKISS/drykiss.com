import { Row, Breadcrumb } from '@drykiss/industry-ui'
import BlogCard from '../../components/common/blogCard'
import AC from '../../components/adaptorComponent'
import { css } from 'styled-components'
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
        pathname: '/blog/blog',
        query: {
          category: 'blog'
        }
      }
    },
    title: 'Blog'
  }
]

const BlogPage = () => {
  return (
    <>
      <AC
        as={MaxContainer}
        customCss={css`
          ol {
            padding-left: 0.5rem;
          }
        `}
      >
        <Breadcrumb breadcrumbs={breadcrumbs} separator="\" />
      </AC>
      <MaxContainer>
        <AC as={BlogCard} full item={headCard} maxWidth="100%" />
      </MaxContainer>
      <AC
        as={MaxContainer}
        mb="6rem"
        smStyles={{
          pX: '1rem'
        }}
      >
        <Row>
          {blogCardData.map((item, index) => {
            return <AC as={BlogCard} key={index} item={item} mb="4rem" />
          })}
        </Row>
      </AC>
      <LetsTalkSection />
    </>
  )
}

export default BlogPage
