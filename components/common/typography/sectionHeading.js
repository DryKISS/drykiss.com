/**
 * Components - Common - Typography - Section Heading
 */

// Style
import styled, { css } from 'styled-components'

// UI
import { Heading } from '@drykiss/industry-ui'

export const SectionHeading = ({ align, content, paddingBottom, textSize }) => {
  return (
    <StyledHeading
      align={align}
      content={content}
      textSize={textSize}
      paddingBottom={paddingBottom}
      tag="h2"
    />
  )
}

const StyledHeading = styled(Heading)`
  font-size: 2.25rem;
  text-align: ${({ align }) => align || 'center'};
  font-weight: bold;
  color: ${({ theme }) => theme.COLOUR.darkBlue};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 2}rem;
  ${({ textSize }) =>
    textSize &&
    css`
      font-size: ${textSize};
    `}
`
