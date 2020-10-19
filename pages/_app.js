/**
 * App
 */
// Next
import Router from 'next/router'
import Head from 'next/head'

// UI
import { GoogleAnalyticsPageView, MyApp } from '@drykiss/industry-ui'

// Layout
import Layout from 'layouts'

// Config
import { Config, Google, Theme } from 'config'

// UI
import 'config/icons'
import 'config/globalStyle.css'

// Track pageViews
Router.events.on('routeChangeComplete', url => {
  if (Google && Google.analytics) {
    GoogleAnalyticsPageView(url, Google.analytics)
  }
})

const PageApp = props => {
  return (
    <>
      <Head>
        <meta
          content='https://drykiss.com/static/social/drykiss-facebook.jpg'
          key='og:image'
          property='og:image'
        />

        <meta
          name='twitter:image'
          content='https://drykiss.com/static/social/drykiss-facebook.jpg'
        />
      </Head>
      <MyApp config={Config} Layout={Layout} offCanvas pageProgressBar theme={Theme} {...props} />
    </>
  )
}

export default PageApp
