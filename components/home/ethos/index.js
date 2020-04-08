/**
 * Components - Home - Ethos
 */

// UI
import { Text } from 'components/text'

// Style
import styled from 'styled-components'

export const Ethos = () => {
  return (
    <>
      <StyledWrapper>
        <StyledText size='xxxl'>Ethos</StyledText>

        <Text size='lg'>
          Modern applications are not just about a distinctive design or utilising cutting edge
          technologies. They are user centric, analytic based, growth machines. At DryKISS we
          encourage a research based project cycle, to meet these ever changing UX needs.
        </Text>
      </StyledWrapper>

      <StyledWrapper>
        <StyledText size='xxxl'>Understand</StyledText>

        <Text size='lg'>
          At DryKISS we want to learn about your user, business and the reasons behind embarking on
          this new project. We can create personas, storyboards and initial prototypes to help guide
          these critical early decisions.
        </Text>
      </StyledWrapper>

      <StyledWrapper>
        <StyledText size='xxxl'>Architect</StyledText>

        <Text size='lg'>
          Modern applications are not just about a distinctive design or utilising cutting edge
          technologies. They are user centric, analytic based, growth machines. At DryKISS we
          encourage a research based project cycle, to meet these ever changing UX needs.
        </Text>
      </StyledWrapper>

      <StyledWrapper>
        <StyledText size='xxxl'>Craft</StyledText>

        <Text size='lg'>
          Modern applications are not just about a distinctive design or utilising cutting edge
          technologies. They are user centric, analytic based, growth machines. At DryKISS we
          encourage a research based project cycle, to meet these ever changing UX needs.
        </Text>
      </StyledWrapper>
    </>
  )
}

const StyledWrapper = styled.div`
  border-bottom: 2px solid #000;
  height: 212px;
  overflow: hidden;
`

const StyledText = styled(Text)`
  font-size: 200px;
`
