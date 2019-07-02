/**
 * App
 */

// React
import React from 'react'

// Next
import App, { Container } from 'next/app'
import Router from 'next/router'

// UI
import { GoogleAnalyticsPageView, Theme } from 'industry-ui'

// Config
import { Google } from 'config'

// Layout
import Layout from 'layout'

// Style
import { ThemeProvider } from 'styled-components'

Router.events.on('routeChangeComplete', url => GoogleAnalyticsPageView(url, Google.analytics))

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={Theme}>

        <Container>

          <Layout>
            <Component {...pageProps} />
          </Layout>

        </Container>

      </ThemeProvider>
    )
  }
}
