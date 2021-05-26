import { Space, Text } from '@drykiss/industry-ui'
import AC from '../adaptorComponent'
import { MaxContainer } from '../common/maxContainer'
import styled from 'styled-components'
import ContactForm from '../common/page/contactForm'

const ContactUsSection = () => {
  return (
    <AC as={MaxContainer} bgColour="light" pY="2.5rem">
      <AC as={Text} semiBold textSize="3.5rem" textColour="darkBlue" center>
        Have a project in mind? Let’s Talk.
      </AC>
      <AC mY="3rem">
        <AC fullWidth center>
          <SubTextContainer>
            <AC as={Text} semiBold textSize="1.25rem" textColour="dark" textCenter>
              We have helped many customers to transformed their ideas intoa working digital
              products
            </AC>
          </SubTextContainer>
        </AC>
      </AC>
      <ContactForm />
    </AC>
  )
}
const SubTextContainer = styled.div`
  max-width: 555px;
`
export default ContactUsSection
