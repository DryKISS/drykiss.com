/**
 * Responsive Sites
 */

// UI
import {
  Page,
  Link,
  Container,
  Row,
  Column,
  Image,
  Divider,
  Button,
  List,
  ListItem,
  MEDIA_QUERY,
  Space,
  Text
} from 'industry-ui'

// Style
import styled from 'styled-components'

export default () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/services/responsive',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page fluid meta={meta}>
      <Container fluid>
        <Row>
          <Column sm={12}>
            <Space>
              <StyledHeading>Responsive Sites</StyledHeading>
            </Space>

            <Space>
              <Divider />
            </Space>
          </Column>
        </Row>
      </Container>

      <Container>
        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Text size='xl'>
                <Link to='#' border>
                  DryKISS
                </Link>{' '}
                is a full service internet and mobile digital production house.
              </Text>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Text>
                Our core services span consulting, strategy; planning; development; testing and
                analytics. Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column sm={12}>
            <Space>
              <Image alt='Services' src='/static/services/services.jpg' title='Services' />
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Text size='xl'>
                DryKISS is a full service internet and mobile digital production house.
              </Text>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Text>
                <mark>
                  Our core services span consulting, strategy; planning; development; testing and
                  analytics.
                </mark>{' '}
                Using cutting edge technologies within disciplined processes. Our core services span
                consulting, strategy; planning; development; testing and analytics. Using cutting
                edge technologies within disciplined processes.
              </Text>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <StyledBlockquote>
                <Space>
                  <Text size='xxl'>”</Text>
                </Space>
                <Space>
                  <Text size='xl'>
                    Our core services span{' '}
                    <Link to='#' border>
                      consulting
                    </Link>
                    ,{' '}
                    <Link to='#' border>
                      strategy
                    </Link>
                    ;{' '}
                    <Link to='#' border>
                      planning
                    </Link>
                    ;{' '}
                    <Link to='#' border>
                      development
                    </Link>
                    ;{' '}
                    <Link to='#' border>
                      testing
                    </Link>{' '}
                    and{' '}
                    <Link to='#' border>
                      analytics
                    </Link>
                    . Using cutting edge technologies within disciplined processes.
                  </Text>
                </Space>
              </StyledBlockquote>
            </Space>
            <Space>
              <Text>
                Our core services span consulting, strategy; planning; development; testing and
                analytics. Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Text>
                Our core services span consulting, strategy; planning; development; testing and
                analytics. Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Divider />
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Text size='lg'>
                Our core services span{' '}
                <Link to='/' border>
                  consulting
                </Link>
                ,{' '}
                <Link to='/' border>
                  strategy
                </Link>
                ;{' '}
                <Link to='/' border>
                  planning
                </Link>
                ;{' '}
                <Link to='/' border>
                  development
                </Link>
                ;{' '}
                <Link to='/' border>
                  testing
                </Link>{' '}
                and{' '}
                <Link to='/' border>
                  analytics
                </Link>
                . Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
            <Space>
              <Text size='sm'>
                Our core services span consulting, strategy; planning; development; testing and
                analytics. Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
          </Column>
        </Row>

        <Row align='center'>
          <Column sm={12} md={6}>
            <Space>
              <Image alt='Services' src='/static/services/services.jpg' title='Services' />
            </Space>
          </Column>
          <Column sm={12} md={4}>
            <Space>
              <Text size='lg'>
                Our core services span consulting, strategy; planning; development; testing and
                analytics. Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Divider />
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Text>
                <mark>
                  Our core services span consulting, strategy; planning; development; testing and
                  analytics. Using cutting edge technologies within disciplined processes.
                </mark>
              </Text>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Text>
                Our core services span consulting, strategy; planning; development; testing and
                analytics. Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
          </Column>
        </Row>

        <Row align='center'>
          <Column offset={{ md: 1, lg: 2 }} md={5} lg={4}>
            <Space>
              <Text size='lg'>
                Our core services span consulting, strategy; planning; development; testing and
                analytics. Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
          </Column>
          <Column sm={12} md={6}>
            <Space>
              <Image alt='Services' src='/static/services/services.jpg' title='Services' />
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Divider />
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={10} lg={8}>
            <Space>
              <Text size='xl'>
                Our core services span{' '}
                <Link to='#' border>
                  consulting
                </Link>
                ,{' '}
                <Link to='#' border>
                  strategy
                </Link>
                ;{' '}
                <Link to='#' border>
                  planning
                </Link>
                ;{' '}
                <Link to='#' border>
                  development
                </Link>
                ;{' '}
                <Link to='#' border>
                  testing
                </Link>{' '}
                and{' '}
                <Link to='#' border>
                  analytics
                </Link>
                . Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={10} lg={8}>
            <Space>
              <Text>
                Our core services span consulting, strategy; planning; development; testing and
                analytics. Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
            <Space>
              <Text>
                Our core services span consulting, strategy; planning; development; testing and
                analytics. Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
            <Space>
              <Link to='#' border>
                <Text size='sm'>Learn more about smth ->></Text>
              </Link>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <StyledBlockquote>
                <Space>
                  <Text size='xxl'>”</Text>
                </Space>
                <Space>
                  <Text size='xl'>
                    Our core services span{' '}
                    <Link to='#' border>
                      consulting
                    </Link>
                    ,{' '}
                    <Link to='#' border>
                      strategy
                    </Link>
                    ;{' '}
                    <Link to='#' border>
                      planning
                    </Link>
                    ;{' '}
                    <Link to='#' border>
                      development
                    </Link>
                    ;{' '}
                    <Link to='#' border>
                      testing
                    </Link>{' '}
                    and{' '}
                    <Link to='#' border>
                      analytics
                    </Link>
                    . Using cutting edge technologies within disciplined processes.
                  </Text>
                </Space>
              </StyledBlockquote>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Text>
                Our core services span consulting, strategy; planning; development; testing and
                analytics. Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <List>
                <ListItem>Our core services span consulting.</ListItem>
                <ListItem>Our core services span consulting.</ListItem>
                <ListItem>Our core services span consulting.</ListItem>
              </List>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Text>
                Our core services span consulting, strategy; planning; development; testing and
                analytics. Using cutting edge technologies within disciplined processes.
              </Text>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Link to='#' border={false}>
                <StyledButton size='lg'>Get started</StyledButton>
              </Link>
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Divider />
            </Space>
          </Column>
        </Row>

        <Row>
          <Column offset={{ md: 1, lg: 2 }} md={9} lg={8}>
            <Space>
              <Link to='#' border>
                <Text size='sm'>All services ->></Text>
              </Link>
            </Space>
          </Column>
        </Row>
      </Container>
    </Page>
  )
}

const StyledBlockquote = styled.div`
  margin: 1rem 0;
  color: #000;
  padding: 1rem 2rem;
  border: 10px solid transparent;
  -moz-border-image: url(/static/border/border.svg) 10;
  -webkit-border-image: url(/static/border/border.svg) 10;
  -o-border-image: url(/static/border/border.svg) 10;
  border-image: url(/static/border/border.svg) 10;
  left: -10px;
  top: -10px;
  right: -10px;
  bottom: -10px;
`

const StyledButton = styled(Button)`
  position: relative;
  font-family: 'JetBrains Mono Bold';
  left: 0.5rem;
  background: #80FF00;
  padding: 1rem 1.25rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #000000;
  border-radius: 0px;
  border: 2px solid #000000;
  cursor: pointer;
  box-shadow:
    -8px 8px 0 #000000,
    -7px 7px 0 #000000,
    -6px 6px 0 #000000,
    -5px 5px 0 #000000,
    -4px 4px 0 #000000,
    -3px 3px 0 #000000,
    -2px 2px 0 #000000,
    -1px 1px 0 #000000;

  &:hover {
    background: #000;
    color: #fff;
    border: 2px solid #80FF00;
  }

  &:active {
    left: -8px;
    top: 8px;
    box-shadow: none;
  }
`
const StyledHeading = styled.h1`
  font-family: 'Monorama';
  font-size: calc(8rem / 3);
  text-align: center;
  color: #fff;
  -webkit-text-stroke: 2px #000000;
  font-style: normal;
  font-weight: 500;
  text-shadow:
    -2px 2px 0 #000,
    -1px 1px 0 #000;

  ${MEDIA_QUERY.tablet`
      font-size: calc(8rem / 2);
      text-shadow:
        -4px 4px 0 #000,
        -3px 3px 0 #000,
        -2px 2px 0 #000,
        -1px 1px 0 #000;
    `}
  ${MEDIA_QUERY.desktop`
      font-size: calc(8rem / 1.5);
      text-shadow:
        -6px 6px 0 #000,
        -5px 5px 0 #000,
        -4px 4px 0 #000,
        -3px 3px 0 #000,
        -2px 2px 0 #000,
        -1px 1px 0 #000;
    `}
  ${MEDIA_QUERY.giant`
      font-size: 8rem;
      text-shadow:
        -8px 8px 0 #000,
        -7px 7px 0 #000,
        -6px 6px 0 #000,
        -5px 5px 0 #000,
        -4px 4px 0 #000,
        -3px 3px 0 #000,
        -2px 2px 0 #000,
        -1px 1px 0 #000;
    `}
`
