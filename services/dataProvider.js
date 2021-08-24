import { Addresses, CmsAddress } from '../config/constants'
import { apiProvider } from './apiProvider'

const responseParser = (res) => {
  const { data } = res
  return data
}

export const GetBlogPostsAPI = async ({ numberOfPosts, start }) => {
  const link = `${CmsAddress}/${Addresses.blog}?_sort=date:desc${
    numberOfPosts ? `&_limit=${numberOfPosts}` : ''
  }${start !== undefined ? `&_start=${start}` : ''}`

  const res = await apiProvider.get(link)
  return responseParser(res)
}

export const GetSingleBlogPostsAPI = async ({ id }) => {
  const link = `${CmsAddress}/${Addresses.blog}/${id}`
  const res = await apiProvider.get(link)
  return responseParser(res)
}

export const GetWorksAPI = async () => {
  const link = `${CmsAddress}/${Addresses.ourWorks}`
  const res = await apiProvider.get(link)
  return responseParser(res)
}

export const GetSingleWorkAPI = async ({ id }) => {
  const link = `${CmsAddress}/${Addresses.ourWorks}/${id}`
  const res = await apiProvider.get(link)
  return responseParser(res)
}
