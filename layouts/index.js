/**
 * Layout
 */

// React
import { node } from 'prop-types'

// UI
import { Bootstrap } from 'industry-ui'

// Data
import { Brand, Navigation } from 'config'
import { Copyright, Footer } from 'data'

const Layout = ({ children }) => {
  return (
    <Bootstrap
      brand={Brand.name}
      brandLogo={Brand.logo}
      children={children}
      copyright={Copyright}
      footer={Footer}
      Navigation={Navigation}
    />
  )
}

Layout.propTypes = {
  children: node.isRequired
}

export default Layout
