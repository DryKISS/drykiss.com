/**
 * Home
 */

// UI
import { Hero, Page } from 'industry-ui'
import { Clients, Contact, Services } from 'components/'

// Config
import { Brand } from 'config'

// Style
import styled from 'styled-components'

export default () => {
  const meta = {
    description: `DryKISS is a full service internet and mobile digital production house. Our
      services span consulting, strategy; planning; development; testing and analytics.`,
    path: '/',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page brand={Brand} meta={meta}>
      <StyledBox>
        <StyledHero
          background='/static/hero/background.png'
          strapline='Talk to us to transform your project idea into a working digital product.'
          title='WE DO MVPS'
        />
      </StyledBox>

      <StyledBox>
        <Clients />
      </StyledBox>

      <StyledBox>
        <Services />
      </StyledBox>

      <StyledBox>
        <Contact />
      </StyledBox>
    </Page>
  )
}

const StyledHero = styled(Hero)`
  margin-bottom: 4rem;
  h1,
  h2 {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    color: #fff;
    padding: 10px;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }
`

const StyledBox = styled.div`
  margin-bottom: 4rem;
`
