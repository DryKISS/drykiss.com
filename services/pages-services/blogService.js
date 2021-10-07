import { GetBlogPostsAPI, GetSingleBlogPostsAPI } from '../dataProvider'

const BlogPageService = {
  getBlogPosts: ({ numberOfPosts, start }) => {
    return GetBlogPageStaticProps({ numberOfPosts, start })
  },
  getSingleBlogPost: ({ slug }) => {
    return GetSingleBlogPostStaticProps({ slug })
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
    console.log('getting blog with slug:' + params.slug + '\n')
    const [post] = await Promise.all([GetSingleBlogPostsAPI({ slug: params.slug })])
    return {
      props: {
        post: post[0]
      },
      revalidate: 10
    }
  } catch (error) {
    console.log(error)
  }
}

//
export { BlogPageService }
