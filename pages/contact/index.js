/**
 * Contact
 */

// React
import { useEffect } from 'react'

// Layout
import { Page } from 'layout/page'

// Config
import { HubSpot } from 'config'

// UI
import { Container, PageHeading } from 'industry-ui'

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://js.hsforms.net/forms/shell.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: HubSpot.id,
          formId: HubSpot.contactFormId,
          target: '#hubspotForm'
        })
      }
    })
  }, [])

  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/contact',
    title: `DryKISS develops hybrid mobile and responsive websites`
  }

  return (
    <Page meta={meta}>
      <Container>

        <PageHeading heading='Contact' />

        <div id='hubspotForm' />

      </Container>
    </Page>
  )
}

export default Contact
