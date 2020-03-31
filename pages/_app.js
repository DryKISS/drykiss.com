/**
 * App
 */

// Next
import Router from 'next/router'
import Head from 'next/head'

// UI
import { GoogleAnalyticsPageView, HubSpot, MyApp } from 'industry-ui'

// Layout
import Layout from 'layout'

// Config
import { Google, Theme } from 'config'

// UI
import 'config/icons'
import 'config/globalStyle.css'

// Track pageViews
Router.events.on('routeChangeComplete', url => {
  if (Google && Google.analytics) {
    GoogleAnalyticsPageView(url, Google.analytics)
  }

  if (HubSpot && HubSpot.id) {
    const _hsq = (window._hsq = window._hsq || [])
    _hsq.push(['setPath', url])
    _hsq.push(['trackPageView'])
  }
})

export default props => (
  <>
    <Head>
      <meta
        content='https://drykiss.com/static/social/drykiss-facebook.jpg'
        key='og:image'
        property='og:image'
      />
      <meta name='twitter:image' content='https://drykiss.com/static/social/drykiss-facebook.jpg' />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'JetBrains Mono';
            src: url('/static/fonts/woff2/JetBrainsMono-Regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('/static/fonts/woff/JetBrainsMono-Regular.woff') format('woff'); /* Pretty Modern Browsers */
          }
      }
      `
        }}
      />
    </Head>
    <MyApp Layout={Layout} {...props} theme={Theme} />
  </>
)
