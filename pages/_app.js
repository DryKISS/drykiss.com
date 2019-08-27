/**
 * App
 */

// Next
import Router from 'next/router'

// UI
import { GoogleAnalyticsPageView, MyApp } from 'industry-ui'

// Config
import { Google } from 'config'

Router.events.on('routeChangeComplete', url => GoogleAnalyticsPageView(url, Google.analytics))

export default (props) =>
  <MyApp {...props} />
