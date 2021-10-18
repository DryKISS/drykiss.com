import { Text } from '@drykiss/industry-ui'
import AC from '../adaptorComponent'
import { MaxContainer } from '../common/maxContainer'
import styled from 'styled-components'
import ContactForm from '../common/page/contactForm'

const ContactUsSection = () => {
  return (
    <AC as={MaxContainer} bgColour="light" pY="2.5rem" id="contactUsSection">
      <AC
        as={Text}
        semiBold
        textSize="3.5rem"
        textColour="darkBlue"
        textCenter
        smStyles={{
          textSize: '1.5rem'
        }}
      >
        Have a project in mind? Let’s Talk.
      </AC>
      <AC
        mY="2rem"
        smStyles={{
          mY: '1.5rem'
        }}
      >
        <AC fullWidth center>
          <SubTextContainer>
            <AC
              as={Text}
              semiBold
              textSize="1.25rem"
              textColour="dark"
              textCenter
              mdStyles={{
                pX: '0.5rem'
              }}
            >
              We have helped many customers to transformed their ideas into a working digital
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
