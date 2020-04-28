/**
 * Components - Home - Principles
 */

// UI
import { Image, Link, MEDIA_QUERY } from 'industry-ui'
import { Text } from 'components'

// Style
import styled from 'styled-components'

// Data
import { PrinciplesData } from './data'

export const Principles = () => {
  return (
    <StyledContainer>
      <Text align='center' size='md'>
        Our work process is based on{' '}
        <Link to='https://en.wikipedia.org/wiki/Don%27t_repeat_yourself' passHref target='_blank'>
          DRY
        </Link>{' '}
        and{' '}
        <Link to='https://en.wikipedia.org/wiki/KISS_principle' passHref target='_blank'>
          KISS
        </Link>{' '}
        principles.
      </Text>

      <StyledWrapper>
        {PrinciplesData.map(({ angle, left, name, top, zIndex }, index) => (
          <StyledImage
            alt='DryKISS Banner'
            angle={angle}
            key={index}
            left={left}
            src={`/static/placeholder/${name}.svg`}
            top={top}
            zIndex={zIndex}
          />
        ))}
      </StyledWrapper>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  padding-top: 2rem;
  ${MEDIA_QUERY.desktop`
    padding-top: 4rem;
  `}
`

const StyledWrapper = styled.div`
  height: calc(200px + 28vw);
  position: relative;
  overflow: hidden;
  ${MEDIA_QUERY.tablet`
    height: calc(200px + 15vw);
  `}
`

const StyledImage = styled(Image)`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  transform: ${({ angle }) => `rotate(${angle}deg)`};
  z-index: ${({ zIndex }) => zIndex};

  left: ${({ left }) => `calc(${left}px - 900px)`};
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
