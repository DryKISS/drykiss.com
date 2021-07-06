import { GetBlogPostsAPI, GetSingleBlogPostsAPI } from '../dataProvider'

const BlogPageService = {
  getBlogPosts: ({ numberOfPosts, start }) => {
    return GetBlogPageStaticProps({ numberOfPosts, start })
  },
  getSingleBlogPost: ({ id }) => {
    return GetSingleBlogPostStaticProps({ id })
  }
}
const GetBlogPageStaticProps = async ({ numberOfPosts, start }) => {
  const [posts] = await Promise.all([GetBlogPostsAPI({ numberOfPosts, start })])

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

const GetSingleBlogPostStaticProps = async (params) => {
  try {
    console.log('newsId:' + params.id + '\n')
    const [post] = await Promise.all([GetSingleBlogPostsAPI({ id: params.id })])
    return {
      props: {
        post
      },
      revalidate: 10
    }
  } catch (error) {
    console.log(error)
  }
}

//
export { BlogPageService }
