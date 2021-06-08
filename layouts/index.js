/**
 * Layout
 */

// React
import { node } from 'prop-types'

// Next
import Head from 'next/head'

// UI
import { Bootstrap } from '@drykiss/industry-ui'

// Config
import { Brand } from '../config/config'
import { Copyright } from '../config/copyright'
import { Footer } from '../config/footer'
import { Navigation } from '../config/navigation'
import GlobalStyles from '../styles/globalStyles'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <Bootstrap
      brand={Brand.name}
      brandLogo={Brand.logo}
      children={children}
      copyright={Copyright}
      footer={Footer}
      Navigation={Navigation}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      </Head>

      {/*<StyledMain>{children}</StyledMain>*/}
			{children}
			<GlobalStyles />
    </Bootstrap>
  )
}
//const StyledMain=styled.main`
//margin-top: -62px;
//`
Layout.propTypes = {
  children: node.isRequired
}

export default Layout
