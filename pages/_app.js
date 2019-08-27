/**
 * App
 */

// React
import React from 'react'

// Next
import App from 'next/app'
import Router from 'next/router'

// UI
import {
  FirebaseProvider,
  GoogleAnalyticsPageView,
  Theme,
  ThemeStyle
} from 'industry-ui'

// Config
import { Firebase, Google } from 'config'

// Layout
import Layout from 'layout'

// Style
import { ThemeProvider } from 'styled-components'
import '@fortawesome/fontawesome-svg-core/styles.css'

Router.events.on('routeChangeComplete', url => GoogleAnalyticsPageView(url, Google.analytics))

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      // <FirebaseProvider config={Firebase}>
      <ThemeProvider theme={Theme}>
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>

          <ThemeStyle />
        </>
      </ThemeProvider>
      // </FirebaseProvider>
    )
  }
}
