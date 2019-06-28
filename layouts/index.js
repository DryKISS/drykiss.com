/**
 * Layout
 */

// React
import { node } from 'prop-types'

// UI
import { Copyright, Footer, Navbar } from 'industry-ui'

// Data
import { COPYRIGHT, FOOTER, NAVIGATION } from 'data'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar brand='/static/logo/drykiss.svg' links={NAVIGATION} />

      {children}

      <Footer columns={FOOTER} />

      <Copyright brand='DryKISS Ltd' links={COPYRIGHT} />
    </>
  )
}

Layout.propTypes = {
  children: node.isRequired
}

export default Layout
