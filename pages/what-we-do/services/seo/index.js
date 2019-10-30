/**
 * SEO
 *
 * @see https://docs.google.com/document/d/1fPTQxf5X0ivBGo-gFD35yaOnp0t5DFNSJNCtP73Z__8/edit#
 */

// UI
import { Hero, Page } from 'industry-ui'

export default () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/services/pricing',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page meta={meta}>
      <Hero
        background='/static/sections/kiss.jpg'
        strapline={`
          London web and mobile development. Crafting modern digital mobile and
          web solutions; using state of the art technologies; within
          disciplined processes. Don't Repeat Yourself  Keep it simple, stupid
        `}
        title='SEO'
      />
    </Page>
  )
}
