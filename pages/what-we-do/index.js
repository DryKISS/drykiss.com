/**
 * What We do
 */

// Layout
import { Page } from 'layout/page'

// UI
import {
  Button,
  Card,
  CardFooter,
  CardDecks,
  Container,
  Link,
  PageHeading
} from 'industry-ui'

// Data
import { Services } from 'data'

const WhatWedo = () => {
  const RenderServices = () =>
    Services.map(({ description, name }, index) =>
      <Card
        body={description}
        bordered
        deck
        header={name}
        key={index}
        shadow
      >
        <CardFooter>
          <Link to={'articleLink'}>
            <Button
              content='Read more'
              context='primary'
              size='lg'
            />
          </Link>
        </CardFooter>
      </Card>
    )

  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/what-we-do',
    title: `DryKISS develops hybrid mobile and responsive websites`
  }

  return (
    <Page meta={meta}>
      <Container>

        <PageHeading
          heading='What we do'
          strapline='DryKISS can offer a full service development and marketing solution.'
        />

        <CardDecks>
          <RenderServices />
        </CardDecks>

      </Container>
    </Page>
  )
}

export default WhatWedo
