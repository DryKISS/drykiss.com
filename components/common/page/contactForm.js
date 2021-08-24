import {
  Alert,
  Button,
  Column,
  Form,
  FormError,
  FormField,
  FormLabel,
  Row,
  TextareaField
} from '@drykiss/industry-ui'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import AC from '../../adaptorComponent'
import styled, { css } from 'styled-components'
import { useState } from 'react'
import axios from 'axios'

const schema = object().shape({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  businessEmail: string().required('Email is required'),
  phoneNumber: string().required('Phone number is required'),
  companyNumber: string().required('Company number is required'),
  message: string().required('Message is required')
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
    placeHolder: 'Message',
    name: 'message',
    size: 12
  }
]
const ContactForm = () => {
  const { errors, handleSubmit, register, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState({
    type: '',
    text: ''
  })

  const defaultProps = {
    errors: errors,
    register: register
  }

  const onFormError = () => {
    setMessage({
      type: 'error',
      text: 'There was an error submitting the form. Please try again!'
    })
    setLoading(false)
  }

  const onFormSuccess = () => {
    reset()
    setMessage({
      type: 'success',
      text: "Your submission was successful. We'll get back to you as soon as possible."
    })
    setLoading(false)
  }

  const onSubmit = async (data, e) => {
    e.preventDefault()
    setLoading(true)
    // Submit form
    try {
       const resp = await axios.post('https://formspree.io/f/mdoypbqq', data, {
        headers: { Accept: 'application/json' }
      })
      if (resp.status === 200) {
        onFormSuccess()
      } else {
        onFormError()
      }
    } catch (error) {
      onFormError()
    }
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
                    border-color: #cccccc;
                  }
                `}
                md={field.size}
              >
                <FormLabel size="md" label="">
                  {field.name === 'message' ? (
                    <TextareaField
                      {...defaultProps}
                      placeholder={field.placeHolder}
                      name={field.name}
                    />
                  ) : (
                    <FormField
                      {...defaultProps}
                      placeholder={field.placeHolder}
                      name={field.name}
                    />
                  )}
                  {errors[field.name] && ErrMessage(errors[field.name].message)}
                </FormLabel>
              </AC>
            )
          })}
        </Row>
        <AC fullWidth center mt="2rem">
          <AC as={Row} fullWidth center>
            <AC as={Column} lg={2} md={2} sm={12}>
              <AC as={Button} disabled={loading} height="3rem" content="Send" block type="submit" />
            </AC>
          </AC>
        </AC>
        {message.text && (
          <AC mt="1rem" className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <Alert content={message.text} context={message.type} />
              </div>
            </div>
          </AC>
        )}
      </Form>
    </AC>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

export default ContactForm
