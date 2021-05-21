/**
 * Components - Home - Hero
 */

// Style
import styled from 'styled-components'

// UI
import { Container, Column, Image, MEDIA_QUERY_MAX, Row } from '@drykiss/industry-ui'
import { PageHeading } from '../../common/page/heading'
import { PageSubHeading } from '../../common/page/subHeading'

export const PageHero = ({ heading, image, subHeading }) => {
  return (
    <StyledWrapper withImage={!!image}>
      <Container>
        <Row>
          <Column xs={12} md={5}>
            <PageHeading content={heading} />

            <PageSubHeading>{subHeading}</PageSubHeading>
          </Column>

          {image && (
            <Column xs={12} md={7}>
              <Image alt="Hero" src={image} />
            </Column>
          )}
        </Row>
      </Container>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.COLOUR.primary} url('/images/hero/pattern.svg') no-repeat right;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLOUR.white};
  height: 435px;
  margin-bottom: ${({ withImage }) => (withImage ? 160 : 40)}px;
  overflow: hidden;
  padding-top: 75px;

  img {
    max-width: 350px;
    text-align: center;
  }

  ${MEDIA_QUERY_MAX.phone`
    padding-top: 90px;
    margin-bottom: 120px;

    img {
      padding-top: 40px;
    }
  `}
`
