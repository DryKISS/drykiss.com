/**
 * Home
 */

// UI
import { Button, Heading, MEDIA_QUERY, Page } from 'industry-ui'
import { Border, Clients, Contact, Ethos, Principles, Services, Space } from 'components/'

// Config
import { Brand } from 'config'

// Style
import styled from 'styled-components'

// COLOURS
import { shade, transparentize } from 'polished'

export default () => {
  const meta = {
    description: `DryKISS is a full service internet and mobile digital production house. Our
      services span consulting, strategy; planning; development; testing and analytics.`,
    path: '/',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page marginTop brand={Brand} fluid meta={meta}>
      <Border backgroundSide='left'>
        <StyledWrapper>
          <Heading content='We do MVPs' tag='h1' />
          <Heading
            content='Talk to us to transform your project idea into a working digital product.'
            tag='h2'
          />
          <Space marginBottom='xl' />
          <Button>Get a free consultation</Button>
        </StyledWrapper>
      </Border>
      <Space marginBottom='xl' />

      <Clients />
      <Space marginBottom='xl' />

      <Ethos />
      <Space marginBottom='xl' />

      <Principles />
      <Space marginBottom='xl' />

      <Services />
      <Space marginBottom='xl' />

      <Contact />
      <Space marginBottom='xl' />
    </Page>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  ${MEDIA_QUERY.desktop`
    padding: 2rem 4rem;
  `}
  h1 {
    color: ${({ theme }) => theme.COLOUR.transparent};
    -webkit-text-stroke: 2px ${({ theme }) => transparentize(0.08, theme.COLOUR.secondary)};
    text-align: center;
    font-size: 3rem;
    ${MEDIA_QUERY.phone`
      font-size: 4rem;
    `}
    ${MEDIA_QUERY.tablet`
      font-size: 5rem;
    `}
    ${MEDIA_QUERY.desktop`
      font-size: 6rem;
    `}
  }
  h2 {
    text-align: center;
    color: ${({ theme }) => theme.COLOUR.white};
    font-size: 1rem;
  }
  button {
    position: relative;
    font-family: 'JetBrains Mono Bold', sans-serif;
    left: 0.5rem;
    background: ${({ theme }) => theme.COLOUR.secondary};
    padding: 0.875rem 1rem;
    margin-bottom: 2rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLOUR.black};
    border-radius: 0;
    border: 2px solid ${({ theme }) => theme.COLOUR.black};
    cursor: pointer;
    box-shadow: -8px 8px 0 ${({ theme }) => theme.COLOUR.black},
      -7px 7px 0 ${({ theme }) => theme.COLOUR.black},
      -6px 6px 0 ${({ theme }) => theme.COLOUR.black},
      -5px 5px 0 ${({ theme }) => theme.COLOUR.black},
      -4px 4px 0 ${({ theme }) => theme.COLOUR.black},
      -3px 3px 0 ${({ theme }) => theme.COLOUR.black},
      -2px 2px 0 ${({ theme }) => theme.COLOUR.black},
      -1px 1px 0 ${({ theme }) => theme.COLOUR.black};
    ${MEDIA_QUERY.desktop`
      padding: 1rem 1.25rem;
    `}
    &:hover {
      color: ${({ theme }) => theme.COLOUR.black};
      background: ${({ theme }) => shade(0.16, theme.COLOUR.secondary)};
      border: 2px solid ${({ theme }) => theme.COLOUR.secondary};
    }
    &:active {
      left: -8px;
      top: 8px;
      box-shadow: none;
    }
  }
`
