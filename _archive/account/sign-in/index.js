/**
 * Sign In
 */

// React
import React, { useState } from 'react'

// Layout
import { Page } from 'layout/page'

// Next
import Router from 'next/router'

// UI
import {
  Alert,
  Column,
  Container,
  Login,
  Row,
  withFirebase
} from 'industry-ui'

const SignIn = ({ firebase }) => {
  const INITIAL_STATE = {
    email: '',
    password: '',
    remember: ''
  }

  const [error, setError] = useState(null)
  const [form, setValues] = useState(INITIAL_STATE)

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
    const { email, password } = form

    firebase
      .Auth
      .handleSignIn('email', email, password)
      .then((authUser) => {
        setValues(INITIAL_STATE)
        Router.push('/dashboard')
      })
      .catch((error) => {
        setError(error)
      })

    e.preventDefault()
  }

  const { email, password, remember } = form

  const pathSignUp = {
    href: {
      pathname: '/account/sign-up/template'
    },
    as: '/account/sign-up'
  }

  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/account/sign-in',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page meta={meta}>
      <Container>

        <Row>

          <Column md={6} offset={{ md: 3 }}>

            <Login
              change={change}
              email={email}
              password={password}
              pathSignUp={pathSignUp}
              remember={remember}
              submit={submit}
            />

            {error && <Alert content={`Error: ${error.message}`} context='warning' />}

          </Column>

        </Row>

      </Container>
    </Page>
  )
}

export default withFirebase(SignIn)
