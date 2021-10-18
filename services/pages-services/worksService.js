import { GetWorksAPI, GetSingleWorkAPI } from '../dataProvider'

const WorksPageService = {
  getWorks: () => {
    return GetWorksStaticProps()
  },
  getSingleWork: ({ id }) => {
    return GetSingleWorkPostStaticProps({ id })
  }
}
const GetWorksStaticProps = async () => {
  const [posts] = await Promise.all([GetWorksAPI()])

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

const GetSingleWorkPostStaticProps = async (params) => {
  try {
    console.log('getting work with Id:' + params.id + '\n')
    const [post] = await Promise.all([GetSingleWorkAPI({ id: params.id })])
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
export { WorksPageService }
