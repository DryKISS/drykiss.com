import { Addresses, CmsAddress } from '../config/constants'
import { apiProvider } from './apiProvider'

export const GetBlogPostsAPI = async ({ numberOfPosts }) => {
  const res = await apiProvider.get(
    `${CmsAddress}/${Addresses.blog}?_sort=date:desc${
      numberOfPosts ? `&_limit=${numberOfPosts}` : ''
    }`
  )
  const data = await res.json()
  return data
}

export const GetOurWorksAPI = async ({ numberOfPosts }) => {
  const res = await apiProvider.get(
    `${CmsAddress}/${Addresses.ourWorks}?_sort=date:desc${
      numberOfPosts ? `&_limit=${numberOfPosts}` : ''
    }`
  )
  const data = await res.json()
  return data
}
