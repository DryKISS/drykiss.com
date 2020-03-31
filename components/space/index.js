/**
 * Components - Space
 */

// React
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

export const Space = ({ children }) => {
  return <StyledSpace>{children}</StyledSpace>
}

const StyledSpace = styled.div`
  margin: 0;
`

Space.protoTypes = {
  children: node
}
