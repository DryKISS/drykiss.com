import styled from 'styled-components'
export const MaxContainer = ({ children, ...props }) => {
  return (
    <StyledWrapper {...props}>
      <Content>{children}</Content>
    </StyledWrapper>
  )
}
const Content = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`
const StyledWrapper = styled.div`
  width: 100%;
`
