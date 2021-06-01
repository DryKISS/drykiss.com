import { Space, Text } from '@drykiss/industry-ui'
import styled, { css } from 'styled-components'
import AC from '../../adaptorComponent'
const SectionTitleAndSubtitle = ({ title, subtitle, maxTextWidth, ...props }) => {
  return (
    <Wrapper {...props}>
      <AC as={Text} semiBold textSize="2.25rem" textColour="darkBlue" center>
        {title}
      </AC>
      <Space marginY="lg">
        <AC fullWidth center>
          <TextContainer maxTextWidth={maxTextWidth}>
            <AC as={Text} semiBold textSize="1.25rem" textColour="#C7D3EE" textCenter>
              {subtitle}
            </AC>
          </TextContainer>
        </AC>
      </Space>
    </Wrapper>
  )
}
const Wrapper = styled.div``
const TextContainer = styled.div`
  max-width: 720px;
  ${({ maxTextWidth }) =>
    maxTextWidth &&
    css`
      max-width: ${maxTextWidth};
    `}
`
export default SectionTitleAndSubtitle
