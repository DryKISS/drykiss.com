import styled from 'styled-components'
import { Row, Column, Text } from '@drykiss/industry-ui'
import AC from '../../../adaptorComponent'

const LetsTalk = () => {
  return (
    <AC as={Wrapper} pointer fullWidth absolute>
      <AC as={Row} elevation={1}>
        <AC as={Column} center height="80px" bgColour="lightBlue" md={8}>
          <AC as={Text} textColour="black" size="md" semiBold>
            Need help with developement?
          </AC>
        </AC>
        <AC as={Column} center height="80px" bgColour="darkBlue" md={4}>
          <AC as={Text} textColour="white" size="md" semiBold>
            let's talk
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
