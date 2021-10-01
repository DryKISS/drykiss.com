/**
 * App
 */

// Next
import Router from 'next/router'
import Head from 'next/head'

// UI
import { GoogleAnalyticsPageView, MyApp } from '@drykiss/industry-ui'
import Layout from '../layouts/index'
import { Config, Google } from '../config/config'
import { Theme } from '../config/theme'

// UI
import '../config/icons'

// Track pageViews
Router.events.on('routeChangeComplete', (url) => {
  if (Google && Google.analytics) {
    GoogleAnalyticsPageView(url, Google.analytics)
  }
})

const PageApp = (props) => {
  return (
    <>
      <Head>
        <meta
          content="https://drykiss.com/images/social/drykiss-facebook.jpg"
          key="og:image"
          property="og:image"
        />
        <meta
          name="facebook:image"
          content="https://drykiss.com/images/social/drykiss-facebook.jpg"
        />
        <meta
          name="twitter:image"
          content="https://drykiss.com/images/social/drykiss-twitter.jpg"
        />
        <meta
          name="instagram:image"
          content="https://drykiss.com/images/social/drykiss-instagram.jpg"
        />
        <meta
          name="linkedin:image"
          content="https://drykiss.com/images/social/drykiss-linkedin.jpg"
        />
      </Head>

      <MyApp config={Config} Layout={Layout} pageProgressBar theme={Theme} {...props} />
    </>
  )
}

export default PageApp
