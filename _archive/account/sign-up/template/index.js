/**
 * Sign Uup
 *
 * - Ask for basic details
 * - Create an Auth account
 * - Create a User in the firestore
 * - Forward to the breeder dashboard
 */

// React
import { useState } from 'react'

// Next
import Router from 'next/router'

// Config
import { BRAND } from 'config'

// UI
import {
  Alert,
  Column,
  Container,
  MetaHead,
  PageHeading,
  Register,
  Row,
  withFirebase
} from 'industry-ui'

const SignUp = ({ firebase, slug }) => {
  const INITIAL_STATE = {
    dayBirthday: '',
    email: '',
    marketing: false,
    monthBirthday: '',
    nameFirst: '',
    nameLast: '',
    password: '',
    terms: false,
    yearBirthday: ''
  }

  const [error, setError] = useState(null)
  const [form, setValues] = useState(INITIAL_STATE)

  const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use'
  const ERROR_MSG_ACCOUNT_EXISTS = 'An account with this E-Mail address already exists. Try to login with this account instead.'

  const change = (e) => {
    const { checked, id, type, value } = e.target
    let v = false

    switch (type) {
      case 'checkbox':
        v = checked
        break
      default:
        v = value
    }

    setValues({ ...form, [id]: v })
  }

  const submit = (e) => {
    const {
      // dayBirthday,
      email,
      marketing,
      // monthBirthday,
      nameFirst,
      nameLast,
      password,
      terms
      // yearBirthday
    } = form

    const roles = [slug.toUpperCase()]

    firebase.Auth
      .handleRegister(email, password)
      .then((authUser) => {
        return firebase.Auth
          .user(authUser.user.uid)
          .set(
            {
              createdAt: firebase.Auth.store.FieldValue.serverTimestamp(),
              // dayBirthday: parseInt(dayBirthday, 10),
              // dateOfBirth: new Date(`${yearBirthday}-${monthBirthday}-${dayBirthday}`),
              email,
              marketing: { email: marketing, seekerEmail: true },
              // monthBirthday: parseInt(monthBirthday, 10),
              nameFirst,
              nameLast,
              roles,
              terms
              // yearBirthday: parseInt(yearBirthday, 10)
            },
            { merge: true }
          )
      })
      .then(() => {
        return firebase.Auth.handleEmailVerification()
      })
      .then(() => {
        setValues(INITIAL_STATE)
        Router.push('/dashboard')
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS
        }

        setError(error)
      })

    e.preventDefault()
  }

  const copy = []

  switch (slug) {
    case 'employer':
      copy.description = 'Join our community of responsible breeders, add your litters and get access to genuine verified buyers.'
      copy.metaDescription = 'Register with Tailwise to be recognized as a Responsible Breeder. Join our mission to stop puppy farms in London and the wider UK.'
      copy.metaTitle = 'Join Our Community of Responsible Breeders'
      copy.title = 'Become a Tailwise Breeder'
      break
    default:
      copy.description = 'Join our community of responsible breeders, add your litters and get access to genuine verified buyers.'
      copy.metaDescription = 'Registering with Tailwise provides your charity with a massive opportunity to help rehome your dogs. Tailwise gives 50% back to charities to help rehome more dogs.'
      copy.metaTitle = 'Register Your Dog Rehome Charity'
      copy.title = 'Sign Up'
  }

  const meta = {
    description: copy.metaDescription,
    path: '/account/sign-up',
    title: copy.metaTitle
  }

  return (
    <Container>

      <MetaHead meta={meta} brand={BRAND} />

      <Row>

        <Column md={6} offset={{ md: 3 }}>

          <PageHeading center heading={copy.title} />

          <p children={copy.description} />

          <Register
            // birthday
            change={change}
            // dayBirthday={form.dayBirthday}
            // monthBirthday={form.monthBirthday}
            // yearBirthday={form.yearBirthday}
            email={form.email}
            marketing={form.marketing}
            nameFirst={form.nameFirst}
            nameLast={form.nameLast}
            password={form.password}
            submit={submit}
            terms={form.terms}
          />

          {error &&
            <Alert content={`Error: ${error.message}`} context='warning' />}
        </Column>

      </Row>

    </Container>
  )
}

SignUp.getInitialProps = async ({ query }) => {
  return { slug: query.slug }
}

export default withFirebase(SignUp)
