import { yup } from '@drykiss/industry-ui'

export const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  email: yup
    .string()
    .email('Email is not valid')
    .required('Email is required'),
  message: yup.string().required('Message is required'),
  mobileNumber: yup.string().required('Mobile number is required')
})
