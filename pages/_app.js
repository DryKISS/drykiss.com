/**
 * App
 */

// Next
import Router from 'next/router'

// UI
import { GoogleAnalyticsPageView, HubSpot, MyApp } from 'industry-ui'

// Config
import { Google } from 'config'

// Track pageViews
Router.events.on('routeChangeComplete', url => {
  if (Google && Google.analytics) {
    GoogleAnalyticsPageView(url, Google.analytics)
  }

  if (HubSpot && HubSpot.id) {
    const _hsq = window._hsq = window._hsq || []
    _hsq.push(['setPath', url])
    _hsq.push(['trackPageView'])
  }
})

export default (props) =>
  <MyApp {...props} />
