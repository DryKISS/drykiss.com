/**
 * Components - Common - Typography - Section Heading
 */

// UI
import { PageHeading as DKPageHeading } from '@drykiss/industry-ui'

// Style
import styled from 'styled-components'

export const PageHeading = props => {
  return <StyledHeading {...props} />
}

const StyledHeading = styled(DKPageHeading)`
  font-weight: 800;
  color: ${({ theme }) => theme.COLOUR.white};
  padding-bottom: 1rem;
`
