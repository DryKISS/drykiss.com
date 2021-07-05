import { GetBlogPostsAPI } from '../dataProvider'

const HomePageService = {
  getInitialData: ({ numberOfPosts }) => GetHomePageStaticProps({ numberOfPosts })
}
const GetHomePageStaticProps = async ({ numberOfPosts }) => {
  const [posts] = await Promise.all([GetBlogPostsAPI({ numberOfPosts })])
  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

//
export { HomePageService }
