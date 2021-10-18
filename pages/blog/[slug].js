import AC from '../../components/adaptorComponent'
import { Button, Link } from '@drykiss/industry-ui'
import { BlogPageService } from '../../services/pages-services/blogService'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { CmsAddress } from '../../config/constants'
import { MaxContainer } from '../../components/common/maxContainer'

export async function getStaticPaths() {
  const res = await BlogPageService.getBlogPosts({})
  const paths = res.props.posts.map((item) => {
    return { params: { slug: item.slug } }
  })
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async ({ params }) => {
  return BlogPageService.getSingleBlogPost({ slug: params?.slug })
}

const heading = (props) => {
  const { children, level } = props
  switch (level) {
    case 1:
      return <h1 children={children} />
    case 2:
      return <H2 children={children} />
    case 3:
      return <h3 children={children} />
    case 4:
      return <h4 children={children} />
    case 5:
      return <h5 children={children} />
    case 6:
      return <h6 children={children} />

    // default to H6 if you try to get a heading of level 0 or 7, as an example
    default:
      return <h6 children={children} />
  }
}
const link = ({ children, href }) => {
  return (
    <Link to={href}>
      <a>{children}</a>
    </Link>
  )
}
const image = ({ alt, src, title }) => (
  <InPostImage alt={alt} src={`${CmsAddress}/${src}`} title={title} />
)

const BlogPost = (props) => {
  const { post } = props
  if (!post) {
    return <></>
  }
  return (
    <>
      <AC
        height="600px"
        fullWidth
        bgImage={post?.image?.url}
        bgCover
        itemsCenter
        flexColumn
        pY="3rem"
      >
        <AC flexFiller />
        <AC maxWidth="750px" textCenter>
          <AC as="h1" textSize="2.25rem" textColour="white">
            {post.title}
          </AC>
          <AC wrap justifyCenter>
            {post.categories &&
              post.categories.map((item, index) => {
                return (
                  <AC key={'y' + index} as={Button} bgColour="#C7D3EE" textColour="darkBlue">
                    {item}
                  </AC>
                )
              })}
          </AC>
        </AC>
      </AC>
      <MaxContainer>
        {post.content && (
          <RichWrapper>
            <ReactMarkdown
              children={post.content}
              components={{
                heading,
                link,
                image
              }}
            />
          </RichWrapper>
        )}
      </MaxContainer>
    </>
  )
}
export default BlogPost
const H2 = styled.h2``
const RichWrapper = styled.div``
