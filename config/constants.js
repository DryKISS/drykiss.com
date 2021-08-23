export const CmsAddress =
  process.env.ENVI === 'develop' ? 'http://localhost:4000' : process.env.CMS_ADDRESS
export const Addresses = {
  blog: 'blog-posts',
  ourWorks: 'our-works'
}
