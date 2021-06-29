import { GetBlogPostsAPI } from '../dataProvider'

const BlogPageService = {
  getBlogPosts: ({ numberOfPosts }) => {
    return GetBlogPageStaticProps({ numberOfPosts })
  }
}
const GetBlogPageStaticProps = async ({ numberOfPosts }) => {
  const [posts] = await Promise.all([GetBlogPostsAPI({ numberOfPosts })])

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

//
export { BlogPageService }
