import { Text } from '@drykiss/industry-ui'
import styled, { css } from 'styled-components'
import AC from '../../adaptorComponent'
const SectionTitleAndSubtitle = ({
  title,
  subtitle,
  maxTextWidth,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <AC
        as={Text}
        semiBold
        textSize='2.25rem'
        textColour='darkBlue'
        center
        fontFamily='Poppins'
        mdStyles={{ pX: '1rem',textCenter:true }}
      >
        {title}
      </AC>
      <AC mb='3rem' mt='2rem'>
        <AC fullWidth center>
          <TextContainer maxTextWidth={maxTextWidth}>
            <AC
              as={Text}
              semiBold
              textSize='1.25rem'
              textColour='#9CB4CA'
              textCenter
              mdStyles={{ pX: '1rem' }}
            >
              {subtitle}
            </AC>
          </TextContainer>
        </AC>
      </AC>
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
