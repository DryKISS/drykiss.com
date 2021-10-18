/**
 * Components - Home - Hero
 */

// Style
import styled from 'styled-components'

// UI
import { Container, Column, Image, MEDIA_QUERY_MAX, Row } from '@drykiss/industry-ui'
import { PageHeading } from '../../common/page/heading'
import AC from '../../adaptorComponent'

export const PageHero = ({ heading, image, onImage, subHeading }) => {
  return (
    <AC as={StyledWrapper} withImage={!!image} minHeight='523px' mdStyles={{minHeight:'unset'}} >
      <Container>
        <Row>
          <Column xs={12} md={6}>
            <PageHeading content={heading} />
            {subHeading}
          </Column>

          {image && (
            <StyledColumn xs={12} md={6}>
              <Image alt="Hero" src={image} />
              {onImage}
            </StyledColumn>
          )}
        </Row>
      </Container>
    </AC>
  )
}
const StyledColumn = styled(Column)`
  display: flex;
  justify-content: center;
`

const StyledWrapper = styled.div`
  background: ${({ theme }) => {
      return theme.COLOUR.primary
    }}
    url('/images/hero/pattern.svg') no-repeat right;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLOUR.white};
  margin-bottom: 2rem;
  overflow: hidden;
  /*padding-top: 140px;*/
  padding-top: 75px;

  img {
    max-width: 350px;
    text-align: center;
  }

  ${MEDIA_QUERY_MAX.phone`
    padding-top: 90px;
    margin-bottom: 2rem;

    img {
      padding-top: 40px;
    }
  `}
`
