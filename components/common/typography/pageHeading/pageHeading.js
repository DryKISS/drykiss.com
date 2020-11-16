/**
 * Components - Common - Typography - Section Heading
 */

// UI
import { Heading } from '@drykiss/industry-ui'

// Style
import styled from 'styled-components'

export const PageHeading = ({ content }) => {
  return <StyledHeading content={content} tag='h1' />
}

const StyledHeading = styled(Heading)`
  text-align: center;
  font-weight: 800;
  color: ${({ theme }) => theme.COLOUR.white};
  padding-bottom: 1rem;
`
