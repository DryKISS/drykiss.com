/**
 * Components - Common - Typography - Section Heading
 */

// UI
import { Heading } from '@drykiss/industry-ui'

// Style
import styled from 'styled-components'

export const SectionHeading = ({ content }) => {
  return <StyledHeading content={content} tag='h2' />
}

const StyledHeading = styled(Heading)`
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.COLOUR.primary};
  padding-bottom: 2rem;
`
