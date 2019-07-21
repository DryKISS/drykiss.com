/**
 * Sidebar
 */

// React
import { node } from 'prop-types'

// UI
import { Bootstrap } from 'industry-ui'

// Data
import { Brand } from 'config'
import { Copyright, Footer, Navigation } from 'data'

const Sidebar = ({ children }) =>
  <Bootstrap
    brand={Brand.name}
    brandLogo={Brand.logo}
    children={children}
    copyright={Copyright}
    footer={Footer}
    navigation={Navigation}
  />

Sidebar.propTypes = {
  children: node.isRequired
}

export default Sidebar
