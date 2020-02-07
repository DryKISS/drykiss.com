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
import { Google } from 'config'

// Font awesome
import { faCopyright } from '@fortawesome/pro-duotone-svg-icons'

import {
  faBars,
  faBlog,
  faCalendarAlt,
  faExternalLink,
  faFileUser,
  faHomeHeart,
  faStopwatch,
  faTimes,
  faUser
} from '@fortawesome/pro-regular-svg-icons'

import {
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faPinterestSquare,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faBars,
  faBlog,
  faCalendarAlt,
  faCopyright,
  faExternalLink,
  faFileUser,
  faHomeHeart,
  faStopwatch,
  faTimes,
  faUser,

  faFacebookSquare,
  faGithub,
  faLinkedin,
  faPinterestSquare,
  faTwitterSquare
)

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
    </Head>
    <MyApp Layout={Layout} {...props} />
  </>
)
