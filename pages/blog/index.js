import { Row, Breadcrumb } from '@drykiss/industry-ui'
import BlogCard from '../../components/common/blogCard'
import AC from '../../components/adaptorComponent'
import styled, { css } from 'styled-components'
import LetsTalkSection from '../../components/our-services/letsTalkSection'
import { MaxContainer } from '../../components/common/maxContainer'
import { BlogPageService } from '../../services/pages-services/blogService'

export const getStaticProps = async () => {
  return BlogPageService.getBlogPosts({})
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

const BlogPage = (props) => {
  const { posts: blogPosts } = props

  const [headCard, ...rest] = blogPosts

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
          {rest.map((item, index) => {
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
