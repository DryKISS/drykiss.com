import { Addresses, CmsAddress } from '../config/constants'
import { apiProvider } from './apiProvider'

export const GetBlogPostsAPI = async ({ numberOfPosts, start }) => {
  const link = `${CmsAddress}/${Addresses.blog}?_sort=date:desc${
    numberOfPosts ? `&_limit=${numberOfPosts}` : ''
  }${start !== undefined ? `&_start=${start}` : ''}`
  const res = await apiProvider.get(link)
  const data = await res.json()
  return data
}

export const GetSingleBlogPostsAPI = async ({ id }) => {
  const link = `${CmsAddress}/${Addresses.blog}/${id}`
  const res = await apiProvider.get(link)
  const data = await res.json()
  return data
}
