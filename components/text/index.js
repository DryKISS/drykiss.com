/**
 * Components - Text
 */

// React
import { node, oneOf, string } from 'prop-types'

// UI
import { CONTEXT, SIZE, MEDIA_QUERY } from 'industry-ui'

// Style
import styled, { css } from 'styled-components'

export const Text = ({ align, children, className, content, context, size }) => {
  return (
    <StyledText align={align} className={className} context={context} size={size}>
      {content || children}
    </StyledText>
  )
}

const StyledText = styled.p`
  margin: 0;
  padding: 0;
  text-align: ${({ align }) => align};
  ${({ size }) =>
    size === 'xxxl' &&
    css`
      color: ${({ context }) => context};
      font-family: 'JetBrains Mono ExtraBold';
      font-size: 1.5rem;
      line-height: 1.5;

      ${MEDIA_QUERY.desktop`
        font-size: 4rem;
      `}
    `}

  ${({ size }) =>
    size === 'xl' &&
    css`
      font-size: 1.5rem;
      line-height: 1.5;
    `}

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
    size === 'sm' &&
    css`
      font-size: 0.75rem;
      line-height: 1.333;
    `}
`

Text.protoTypes = {
  align: string,
  children: node,
  content: string,
  context: oneOf(Object.values(CONTEXT)),
  size: oneOf(Object.values(SIZE))
}

Text.defaultProps = {
  context: 'black',
  size: 'md'
}
