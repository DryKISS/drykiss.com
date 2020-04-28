/**
 * Components — Border
 */

// React
import { node, string } from 'prop-types'

// UI
import { MEDIA_QUERY } from 'industry-ui'

// Style
import styled, { css } from 'styled-components'
import { mix, tint, transparentize } from 'polished'

export const Border = ({ children, content, size, backgroundSide }) => {
  return (
    <StyledBorder size={size}>
      <StyledBackground backgroundSide={backgroundSide}>{content || children}</StyledBackground>
    </StyledBorder>
  )
}

const StyledBorder = styled.div`
  border: 10px solid transparent;
  border-image: url(/static/border/border10.svg) 10;
  ${MEDIA_QUERY.tablet`
    border: 18px solid transparent;
    border-image: url(/static/border/border18.svg) 18;
  `}
  ${MEDIA_QUERY.desktop`
    border: 42px solid transparent;
    border-image: url(/static/border/border42.svg) 42;
  `}
`

const StyledBackground = styled.div`
  margin-left: -8px;
  margin-bottom: -8px;
  ${MEDIA_QUERY.tablet`
    margin-left: -16px;
    margin-bottom: -16px;
  `}
  ${MEDIA_QUERY.desktop`
    margin-left: -40px;
    margin-bottom: -40px;
  `}
  ${({ backgroundSide }) =>
    backgroundSide === 'right' &&
    css`
      margin-left: 0;
      margin-bottom: 0;
      margin-right: -8px;
      margin-top: -8px;
      ${MEDIA_QUERY.tablet`
        margin-left: 0;
        margin-bottom: 0;
        margin-right: -16px;
        margin-top: -16px;
      `}
      ${MEDIA_QUERY.desktop`
        margin-left: 0;
        margin-bottom: 0;
        margin-right: -40px;
        margin-top: -40px;
      `}
    `}

  background: ${({ theme }) =>
    transparentize(
      0.08,
      mix(0.88, tint(0.04, theme.COLOUR.black), tint(0.96, theme.COLOUR.primary))
    )};
  padding: 2rem 0;
`

Border.protoTypes = {
  children: node,
  content: string,
  size: string,
  backgroundSide: string
}

Border.defaultProps = {
  size: '10'
}
