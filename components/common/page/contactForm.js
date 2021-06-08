import { Button, Column, Form, FormError, FormField, FormLabel, Row } from '@drykiss/industry-ui'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import AC from '../../adaptorComponent'
import styled, { css } from 'styled-components'
const schema = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  businessEmail: string().required(),
  phoneNumber: string().required(),
  companyNumber: string().required(),
  message: string().required()
})

const ErrMessage = (message) => <FormError message={message} />
const fields = [
  {
    placeHolder: 'First Name',
    name: 'firstName',
    size: 6
  },
  {
    placeHolder: 'Last Name',
    name: 'lastName',
    size: 6
  },
  {
    placeHolder: 'Business Email',
    name: 'businessEmail',
    size: 6
  },
  {
    placeHolder: 'Phone Number',
    name: 'phoneNumber',
    size: 6
  },
  {
    placeHolder: 'Company Number',
    name: 'companyNumber',
    size: 12
  },
  {
    placeHolder: 'message',
    name: 'message',
    size: 12
  }
]
const ContactForm = () => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const defaultProps = {
    errors: errors,
    register: register
  }

  const onSubmit = (data) => {
    console.info(data)
  }

  return (
    <AC
      as={Wrapper}
      smStyles={{
        pX: '1rem'
      }}
    >
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <Row>
          {fields.map((field, index) => {
            return (
              <AC
                key={field.name}
                as={Column}
                customCss={css`
                  input {
                    min-height: 3.25rem;
										border-color:#CCCCCC;
                  }
                `}
                md={field.size}
              >
                <FormLabel size="md" label="">
                  <FormField {...defaultProps} placeholder={field.placeHolder} name={field.name} />
                  {errors[field.name] && ErrMessage(errors[field.name].message)}
                </FormLabel>
              </AC>
            )
          })}
        </Row>
        <AC fullWidth center mt="2rem">
          <AC as={Row} fullWidth center>
            <AC as={Column} lg={2} md={2} sm={12}>
              <AC as={Button} height="3rem" content="Send" block type="submit" />
            </AC>
          </AC>
        </AC>
      </Form>
    </AC>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

export default ContactForm
