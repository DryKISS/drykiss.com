/**
 * What We do
 */

// UI
import { Button, Card, CardFooter, CardDecks, Link, Page } from 'industry-ui'

// Data
import { Services } from 'data'

export default () => {
  const RenderServices = () =>
    Services.map(({ description, name, to }, index) => (
      <Card body={description} bordered deck header={name} key={index} shadow>
        <CardFooter>
          <Link to={`/what-we-do/services${to}`}>
            <Button content='Read more' context='primary' size='lg' />
          </Link>
        </CardFooter>
      </Card>
    ))

  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/what-we-do',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page heading='What we do' meta={meta}>
      <p>DryKISS can offer a full service development and marketing solution.</p>

      <CardDecks>
        <RenderServices />
      </CardDecks>
    </Page>
  )
}
