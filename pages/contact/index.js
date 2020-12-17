/**
 * Contact
 */

// UI
import { Contact, Page } from 'components'

const PageContact = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/contact',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page
      heading='Contact Us for any inquiries'
      heroHeading='Contact Us'
      heroSubHeading='Get in Touch with Us'
      meta={meta}
    >
      <Contact />
    </Page>
  )
}

export default PageContact
