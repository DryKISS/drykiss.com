import { GetBlogPostsAPI, GetWorksAPI } from '../dataProvider'

const HomePageService = {
  getInitialData: ({ numberOfPosts }) => GetHomePageStaticProps({ numberOfPosts })
}
const GetHomePageStaticProps = async ({ numberOfPosts }) => {
  const [posts, works] = await Promise.all([GetBlogPostsAPI({ numberOfPosts }), GetWorksAPI()])
  return {
    props: {
      posts,
      works
    },
    revalidate: 10
  }
}

export { HomePageService }
