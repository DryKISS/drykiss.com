/**
 * App
 */

// React
import React from 'react'

// Next
import App, { Container } from 'next/app'
import Head from 'next/head'

// UI
import { Theme } from 'industry-ui'

// Layout
import Layout from 'layout'

// Style
import { createGlobalStyle, ThemeProvider } from 'styled-components'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    const pathname = ctx.pathname

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, pathname }
  }

  render () {
    const { Component, pageProps, pathname } = this.props

    return (
      <Container>

        <ThemeProvider theme={Theme}>

          <>

            <Head>

              <meta name='viewport' content='width=device-width, initial-scale=1' key='viewport' />
              <meta charSet='UTF-8' key='charset' />
              <meta httpEquiv='X-UA-Compatible' content='IE=edge' key='edge' />
              <meta name='format-detection' content='telephone=no' key='format' />

              <meta name='author' content='DryKISS' key='author' />

              <meta property='og:type' content='website' />
              <meta property='og:image' content='https://drykiss.com/static/social/drykiss-facebook.png' />
              <meta property='og:site_name' content='DryKISS' />
              <meta property='og:locale' content='en_GB' />
              <meta property='og:image:width' content='1200' />
              <meta property='og:image:height' content='630' />
              <meta property='fb:app_id' content='285418984933747' />

              <meta name='twitter:card' content='summary_large_image' />
              <meta name='twitter:creator' content='@drykiss' />
              <meta name='twitter:site' content='@drykiss' />
              <meta name='twitter:image' content='https://drykiss.com/static/social/drykiss-facebook.png' />
              <meta name='twitter:image:alt' content='DryKISS logo and strapline' />

              <link rel='apple-touch-icon' sizes='180x180' href='/static/favicon/apple-touch-icon.png' />
              <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon/favicon.png' />
              <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon/favicon.png' />

            </Head>

            <GlobalStyle />

            <Layout path={pathname}>
              <Component {...pageProps} />
            </Layout>

          </>

        </ThemeProvider>

      </Container>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  .Form-feedback {
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #dc3545;
  }

  .Form-validated .Form-control:valid~.Form-feedback {
    display: none;
  }

  .Form-validated .Form-control:invalid {
    border-color: #dc3545;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-white {
    color: #fff;
  }

  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }

  .d-none {
    display: none;
  }

  @media (min-width: 768px) {
    .d-md-block {
      display: block;
    }
  }

  #iubenda_policy .iub_content {
    padding: 0 !important;
  }

  #iubenda_policy.iubenda_fluid_policy .iub_container {
    margin: 0 !important;
  }

  /* Normalise */
  html {
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    color: #6b7a87;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    position: relative;
    padding-bottom: 4rem;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
    color: #0679d8;
    text-decoration: none;

    &:hover {
      color: #e8095e;
    }
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  input {
    overflow: visible;
  }

  select {
    text-transform: none;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    border: 0;
    margin-bottom: 1rem;
    padding: 0.5rem 0 0;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
  }

  ::-webkit-file-upload-button {
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
  `
