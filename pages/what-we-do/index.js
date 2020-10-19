/**
 * What We do
 */

// UI
import { Page, Divider, Card, Link, Space, Text } from '@drykiss/industry-ui'

// Data
import { Services } from 'data'

// Style
import styled from 'styled-components'

const PageWhatWeDo = () => {
  const RenderServices = () =>
    Services.map(({ description, name, to }, index) => (
      <StyledCard key={index}>
        <Space>
          <Link to={`/what-we-do/services${to}`} border={false}>
            <StyledText size='xxl' stroke='true'>
              {name}
            </StyledText>
          </Link>
        </Space>

        <Space>
          <Text size='md'>{description}</Text>
        </Space>

        <Space>
          <Link to={`/what-we-do/services${to}`} border>
            <StyledText size='xs'>Read: {name} ->></StyledText>
          </Link>
        </Space>

        <Space>
          <Divider />
        </Space>
      </StyledCard>
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
    <Page pageHeading={{ heading: 'What we do' }} meta={meta}>
      <Space>
        <Text size='lg'>DryKISS can offer a full service development and marketing solution.</Text>
      </Space>
      <RenderServices />
    </Page>
  )
}

const StyledText = styled(Text)`
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #000;
  }
`

const StyledCard = styled(Card)`
  display: inline-block;
`

export default PageWhatWeDo
