/**
 * Components - Home - Principles
 */

// UI
import { Image, MEDIA_QUERY } from 'industry-ui'
import { Text } from 'components/text'

// Style
import styled from 'styled-components'

// Data
import { PrinciplesData } from './data'

export const Principles = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        {PrinciplesData.map(({ angle, left, top, zIndex }, index) => (
          <StyledImage
            alt='DryKISS Banner'
            angle={angle}
            key={index}
            left={left}
            src='/static/placeholder/banner.svg'
            top={top}
            zIndex={zIndex}
          />
        ))}
      </StyledWrapper>

      <StyledText align='center' context='black' size='xl'>
        Our work process is based on DRY and KISS principles.
      </StyledText>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  ${MEDIA_QUERY.desktop`
    padding-top: 4rem;
  `}

  ${MEDIA_QUERY.giant`
    padding-top: 4rem;
  `}
`

const StyledWrapper = styled.div`
  height: calc(200px + 15vw);
  position: relative;
  overflow: hidden;
`

const StyledImage = styled(Image)`
  position: absolute;
  left: ${({ left }) => `calc(${left}px - 900px)`};
  top: ${({ top }) => `${top}px`};
  transform: ${({ angle }) => `rotate(${angle}deg)`};
  z-index: ${({ zIndex }) => zIndex};

  ${MEDIA_QUERY.tablet`
    left: ${({ left }) => `calc(${left}px - 200px)`};
    width: 65%;
  `}

  ${MEDIA_QUERY.desktop`
    left: ${({ left }) => `calc(${left}px - 100px)`};
    width: 50%;
  `}

  ${MEDIA_QUERY.giant`
    left: ${({ left }) => `calc(${left}px + 300px)`};
    width: 33%;
  `}
`

const StyledText = styled(Text)`
  margin-top: 2rem;
`
