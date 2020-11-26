/**
 * Components - Common — Page
 */
// Style
import styled from 'styled-components'

// UI
import { MetaHead } from '@drykiss/industry-ui'

// Config
import { Brand, Canonical } from 'config'

// Components
import { PageHero } from './hero'

export const Page = ({ children, fluid, heading, heroImage, subHeading, meta }) => {
  return (
    <StyledPage>
      {meta && <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />}

      <PageHero heading={heading} image={heroImage} subHeading={subHeading} />

      {children}
    </StyledPage>
  )
}

const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.COLOUR.white};
`
