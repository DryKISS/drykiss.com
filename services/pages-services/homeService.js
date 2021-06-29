import { GetOurWorksAPI } from '../dataProvider'

const HomePageService = {
  getInitialData: ({ numberOfPosts }) => GetHomePageStaticProps({ numberOfPosts })
}
const GetHomePageStaticProps = async ({ numberOfPosts }) => {
  const [works] = await Promise.all([GetOurWorksAPI({ numberOfPosts })])
  return {
    props: {
      works
    },
    revalidate: 10
  }
}

//
export { HomePageService }
