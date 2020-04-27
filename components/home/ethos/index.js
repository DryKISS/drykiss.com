/**
 * Components - Home - Ethos
 */

// UI
import { Container, MEDIA_QUERY } from 'industry-ui'
import { Space } from 'components/space'
import { Text } from 'components/text'

// Style
import styled from 'styled-components'

// COLORS
import { transparentize } from 'polished'

export const Ethos = () => {
  return (
    <Container>
      <StyledWrapper>
        <StyledTextWrapper>
          <StyledTextPrimary size='xxxl'>Ethos</StyledTextPrimary>
        </StyledTextWrapper>
        <Text size='md'>
          Modern applications are not just about a distinctive design or utilising cutting edge
          technologies. They are user centric, analytic based, growth machines. At DryKISS we
          encourage a research based project cycle, to meet these ever changing UX needs.
        </Text>
        <Space marginBottom='xl' />
      </StyledWrapper>

      <StyledWrapper>
        <StyledTextWrapper>
          <StyledText size='xxxl'>Understand</StyledText>
        </StyledTextWrapper>
        <Text size='md'>
          At DryKISS we want to learn about your user, business and the reasons behind embarking on
          this new project. We can create personas, storyboards and initial prototypes to help guide
          these critical early decisions.
        </Text>
        <Space marginBottom='xl' />
      </StyledWrapper>

      <StyledWrapper>
        <StyledTextWrapper>
          <StyledText size='xxxl'>Architect</StyledText>
        </StyledTextWrapper>
        <Text size='md'>
          Modern applications are not just about a distinctive design or utilising cutting edge
          technologies. They are user centric, analytic based, growth machines. At DryKISS we
          encourage a research based project cycle, to meet these ever changing UX needs.
        </Text>
        <Space marginBottom='xl' />
      </StyledWrapper>

      <StyledWrapper>
        <StyledTextWrapper>
          <StyledText size='xxxl'>Craft</StyledText>
        </StyledTextWrapper>
        <Text size='md'>
          Modern applications are not just about a distinctive design or utilising cutting edge
          technologies. They are user centric, analytic based, growth machines. At DryKISS we
          encourage a research based project cycle, to meet these ever changing UX needs.
        </Text>
        <Space marginBottom='xl' />
      </StyledWrapper>
    </Container>
  )
}

const StyledWrapper = styled.div`
  margin-bottom: 2rem;
  border-bottom: 2px solid #000;
`
const StyledTextWrapper = styled.div`
  margin-bottom: 1rem;
  height: 2.35rem;
  overflow: hidden;
  ${MEDIA_QUERY.phone`
    height: 4.65rem;
  `}
  ${MEDIA_QUERY.tablet`
    height: 5.5rem;
  `}
  ${MEDIA_QUERY.desktop`
    height: 6.5rem;
  `}
  ${MEDIA_QUERY.giant`
    height: 7.25rem;
  `}
`

const StyledTextPrimary = styled(Text)`
  color: ${({ theme }) => transparentize(0.04, theme.COLOUR.secondary)};
`
const StyledText = styled(StyledTextPrimary)`
  color: ${({ theme }) => transparentize(0.04, theme.COLOUR.black)};
`
