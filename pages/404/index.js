/**
 * Error 404
 */

// Layout
import { Page } from 'layout/page'

// UI
import { Container, PageHeading } from 'industry-ui'

export default () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/404',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page meta={meta}>
      <Container>

        <PageHeading
          heading='404 ERROR PAGE – NOT FOUND'
          strapline={`
            The page you were looking for no longer exists or never did.
            Please use the links at the top of your screen to get back in the
            game, or click here to go home and start again.
          `}
        />

      </Container>
    </Page>
  )
}
