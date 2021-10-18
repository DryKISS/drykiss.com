export const smoothScroll = (id) => {
  document?.querySelector(id)?.scrollIntoView({
    behavior: 'smooth'
  })
}
