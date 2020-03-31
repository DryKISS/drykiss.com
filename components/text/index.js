/**
 * Components - Text
 */

// React
import { node, oneOf, string } from 'prop-types'

// UI
import { CONTEXT, SIZE } from 'industry-ui'

// Style
import styled, { css } from 'styled-components'

export const Text = ({ children, content, context, size }) => {
  return <StyledText>{content || children}</StyledText>
}

const StyledText = styled.p`
  margin: 0;
  padding: 0;
  ${({ size }) =>
    size === 'lg' &&
    css`
      font-size: 1rem;
      line-height: 1.5;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      font-size: 0.875rem;
      line-height: 1.429;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      font-size: 0.75rem;
      line-height: 1.333;
    `}
`

Text.protoTypes = {
  children: node,
  content: string,
  context: oneOf(Object.values(CONTEXT)),
  size: oneOf(Object.values(SIZE))
}

Text.defaultProps = {
  context: 'white',
  size: 'md'
}
