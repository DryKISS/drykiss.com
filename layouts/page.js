/**
 * Page
 * Allows us to specify some rules for how the page will be rendered
 *
 * Can we bring in dynamic hooks if we want these things
 *
 * - withAuthentication
 * - withFirebase
 *
 * Which layout to use
 * General meta Tags
 */

// React
import { node } from 'prop-types'

// UI
import { MetaHead } from 'industry-ui'

// Data
import { Brand, Canonical } from 'config'

export const Page = ({ children, meta }) => {
  return (
    <>
      <MetaHead
        canonical={Canonical}
        brand={Brand.name}
        meta={meta}
      />

      {children}

      <br />
    </>
  )
}

Page.propTypes = {
  children: node.isRequired
}
