/**
 * Document
 */

// React
import React from 'react'

// Next
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// Config
import { Google } from 'config'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
    })

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] }
  }

  render () {
    return (
      <html className='no-js' lang='en' dir='ltr' prefix='og: http://ogp.me/ns#'>

        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${Google.analytics}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${Google.analytics}');
              `
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

      </html>
    )
  }
}
