import AC from '../../../adaptorComponent'
import styled from 'styled-components'
import { Button, Column, Space, Row, Text } from '@drykiss/industry-ui'
import { PageSubHeading } from '../subHeading'
import Link from 'next/link'

const HomeSubHeading = () => {
  return (
    <>
      <PageSubHeading>
        <Text context="white" size="lg">
          <AC as="span" bold>
            {' '}
            Supercharge{' '}
          </AC>
          <AC as="span"> your startup </AC>
        </Text>
        <Space marginBottom="xs" />
        <Text context="white" size="lg">
          <AC as="span" bold>
            {' '}
            Launch{' '}
          </AC>
          <AC as="span"> your application and</AC>
          <AC as="span" bold>
            {' '}
            Validate
          </AC>
          <AC as="span"> your idea.</AC>
        </Text>
      </PageSubHeading>
      <Space marginBottom="lg" />
      <Row>
        <Column md={3}>
          <Link href="/services">
            <AC as={StyledButton} outline context="white" mb="1rem">
              <AC as={Text} textColour="white" size="sm">
                <AC as="span" bold>
                  Services
                </AC>
              </AC>
            </AC>
          </Link>
        </Column>
        <Column md={6}>
          <Link href="/our-works">
            <StyledButton context="white" outline>
              <AC as={Text} textColour="white" size="sm">
                <AC as="span" bold>
                  How we do it
                </AC>
              </AC>
            </StyledButton>
          </Link>
        </Column>
      </Row>
    </>
  )
}

const StyledButton = styled(Button)`
  min-width: 126px; ;
`
export default HomeSubHeading
