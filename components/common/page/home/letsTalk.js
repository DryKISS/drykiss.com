import styled from 'styled-components'
import { Row, Column, Text } from '@drykiss/industry-ui'
import AC from '../../../adaptorComponent'
import { smoothScroll } from '../../../../utils/scrollTo'

const LetsTalk = () => {
  return (
    <AC as={Wrapper} fullWidth absolute mdStyles={{ pX: '1.5rem' }}>
      <AC as={Row} elevation={1}>
        <AC as={Column} center height="80px" bgColour="lightBlue" md={8}>
          <AC as={Text} textColour="black" size="md" semiBold>
            Need help with developement?
          </AC>
        </AC>
        <AC as={Column} center height="80px" bgColour="darkBlue" md={4} pointer padding="0">
          <AC fullWidth center height="100%" onClick={() => smoothScroll('#contactUsSection')}>
            <AC as={Text} textColour="white" size="md" semiBold>
              LET'S TALK
            </AC>
          </AC>
        </AC>
      </AC>
    </AC>
  )
}

const Wrapper = styled.div`
  bottom: 3rem;
`
export default LetsTalk
