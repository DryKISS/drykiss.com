import AC from '../adaptorComponent'
import {useState} from 'react'
import { MaxContainer } from '../common/maxContainer'
import { Column, Row, Button } from '@drykiss/industry-ui'
import styled from 'styled-components'

const LetsTalkSection = () => {
	const [isOpen, setIsOpen] = useState(false)
  return (
    <AC as={StyledWrapper} bgColour="light">
      <MaxContainer>
        <AC as={Row} pY="2rem" itemsCenter>
          <AC
            as={Column}
            md={10}
            sm={12}
            textSize="1.5rem"
            bold
            textColour="darkBlue"
            mdStyles={{
              textCenter: true,
              mb: '0.5rem'
            }}
          >
            Have a project in mind? Let’s Talk.
          </AC>
          <AC center as={Column} md={2} pX="1rem" sm={12}>
            <AC as={Button} width="8rem"  height="3rem">
              Let's talk
            </AC>
          </AC>
        </AC>
      </MaxContainer>
    </AC>
  )
}
const StyledWrapper=styled.div``
export default LetsTalkSection
