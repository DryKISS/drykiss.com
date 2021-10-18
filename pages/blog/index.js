import { useState } from 'react'
import { Row, Breadcrumb } from '@drykiss/industry-ui'
import BlogCard from '../../components/common/blogCard'
import AC from '../../components/adaptorComponent'
import styled, { css } from 'styled-components'
import LetsTalkSection from '../../components/our-services/letsTalkSection'
import { MaxContainer } from '../../components/common/maxContainer'
import { BlogPageService } from '../../services/pages-services/blogService'
import { GetBlogPostsAPI } from '../../services/dataProvider'

export const getStaticProps = async () => {
  return BlogPageService.getBlogPosts({ numberOfPosts: 7 })
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
        pathname: '/blog',
        query: {
          category: 'blog'
        }
      }
    },
    title: 'blog'
  }
]

const BlogPage = (props) => {
  const { posts: blogPosts } = props

  const [headCard, ...rest] = blogPosts
  const [posts, setPosts] = useState(rest)
  const [showLoadMore, setShowLoadMore] = useState(true)

  const handleLoadMoreClick = async () => {
    const newPosts = await GetBlogPostsAPI({
      numberOfPosts: 6,
      start: posts.length + 1
    })
    setPosts(() => [...posts, ...newPosts])
    if (newPosts.length < 6) {
      setShowLoadMore(false)
    }
  }

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
          {posts.map((item, index) => {
            return <AC as={BlogCard} key={index} item={item} mb="2rem" />
          })}
        </Row>
      </AC>
      {showLoadMore && (
        <AC fullWidth center pb="2rem">
          <AC as={StyledButton} width="150px" height="32px" onClick={handleLoadMoreClick}>
            view more posts
          </AC>
        </AC>
      )}
      <LetsTalkSection />
    </>
  )
}
const StyledMaxContainer = styled(MaxContainer)`
  margin-top: 2rem;
`
const StyledButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.COLOUR.primary};
    border: 1px solid ${theme.COLOUR.primary};
    background-color: white;
  `}
`
export default BlogPage
